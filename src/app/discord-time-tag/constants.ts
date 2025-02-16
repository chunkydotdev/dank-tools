import { format, formatDistanceToNow } from "date-fns";
import { TimeFormat } from "./types";

export const timeFormats: TimeFormat[] = [
  {
    format: "<t:{{time}}:t>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "h:mm a"),
  },
  {
    format: "<t:{{time}}:T>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "h:mm:ss a"),
  },
  {
    format: "<t:{{time}}:d>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "MM/dd/yyyy"),
  },
  {
    format: "<t:{{time}}:D>",
    preview: (timestamp) => format(new Date(timestamp * 1000), "MMMM d, yyyy"),
  },
  {
    format: "<t:{{time}}:f>",
    preview: (timestamp) =>
      format(new Date(timestamp * 1000), "MMMM d, yyyy h:mm a"),
  },
  {
    format: "<t:{{time}}:F>",
    preview: (timestamp) =>
      format(new Date(timestamp * 1000), "EEEE, MMMM d, yyyy h:mm a"),
  },
  {
    format: "<t:{{time}}:R>",
    preview: (timestamp) =>
      formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true }),
  },
];
