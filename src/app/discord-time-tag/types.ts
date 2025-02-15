export type TimeFormat = {
  label: string;
  format: string;
  preview: (timestamp: number) => string;
};
