import { existsSync } from "node:fs";
import { config } from "dotenv";
import { execa, ExecaError } from "execa";

config({ quiet: true });

const SHOULD_RUN_PRECOMMIT = process.env["GIT_PRECOMMIT_VERIFY"] === "true";
const IS_MERGE_COMMIT = existsSync(".git/MERGE_HEAD");

async function main() {
    if (!SHOULD_RUN_PRECOMMIT) {
        console.info("[PRE-COMMIT] Skipped due to .env configuration");
        return;
    }

    if (IS_MERGE_COMMIT) {
        console.info("[PRE-COMMIT] Skipped on merge commit");
        return;
    }

    try {
        console.info("[PRE-COMMIT] Hook running...");
        await execa("bunx", ["lint-staged"], { stdio: "inherit" });
        console.info("[PRE-COMMIT] Hook completed successfully");
    } catch (err) {
        const error = err as ExecaError;

        if (error.command === "bunx" && error.exitCode !== undefined) {
            // lint-staged failed (expected when linting issues exist) - let inherited stdio output stand alone
            console.info(
                "[PRE-COMMIT] Hook failed (lint-staged errors detected)"
            );
        } else {
            // True unexpected error (e.g., bunx not found, permission denied)
            console.error("[PRE-COMMIT] Unexpected error:", error.message);
        }
        process.exit(1);
    }
}

await main();
