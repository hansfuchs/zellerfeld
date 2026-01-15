import { format } from "date-fns";

export function formatTimeStamp(timestamp: string) {
    return format(new Date(timestamp), "h:mm a, MMM d, yyyy");
}
