import { format, formatDistanceToNow } from "date-fns";
import { TimeFormat } from "./types";

export const timeFormats: TimeFormat[] = [
  {
    label: "Short Time (1:23 PM)",
    format: "<t:{{time}}:t>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "h:mm a"),
  },
  {
    label: "Long Time (1:23:00 PM)",
    format: "<t:{{time}}:T>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "h:mm:ss a"),
  },
  {
    label: "Short Date (01/01/2024)",
    format: "<t:{{time}}:d>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "MM/dd/yyyy"),
  },
  {
    label: "Long Date (January 1, 2024)",
    format: "<t:{{time}}:D>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "MMMM d, yyyy"),
  },
  {
    label: "Short Date/Time (January 1, 2024 1:23 PM)",
    format: "<t:{{time}}:f>",
    preview: (timestamp) =>
      format(new Date(timestamp * 1000), "MMMM d, yyyy h:mm a"),
  },
  {
    label: "Long Date/Time (Monday, January 1, 2024 1:23 PM)",
    format: "<t:{{time}}:F>",
    preview: (timestamp) =>
      format(new Date(timestamp * 1000), "EEEE, MMMM d, yyyy h:mm a"),
  },
  {
    label: "Relative Time (2 hours ago)",
    format: "<t:{{time}}:R>",
    preview: (timestamp) =>
      formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true }),
  },
];
