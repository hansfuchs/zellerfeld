import { assert, describe, it } from "vitest";
import { formatTimeStamp } from "./format-timestamp";

describe("format timestamp", () => {
    it("should format correctly", () => {
        let result = formatTimeStamp("2025-08-07T09:11:00Z");

        assert.equal(result, "11:11 AM, Aug 7, 2025");
    });
});
