"use client";

import { Button } from "@/components/ui/button";
import { IconCheck } from "@tabler/icons-react";
import { TimeFormat } from "../../app/discord-time-tag/types";

type TimeFormatListProps = {
  timeFormats: TimeFormat[];
  timestamp: string;
  copiedIndex: number | null;
  onCopy: (format: string, index: number) => void;
};

export function TimeFormatList({
  timeFormats,
  timestamp,
  copiedIndex,
  onCopy,
}: TimeFormatListProps) {
  return (
    <div className="space-y-4">
      {timeFormats.map((format, index) => (
        <div
          key={format.format}
          className="flex items-center justify-between px-4 py-2 bg-white/10 transition-colors hover:bg-white/20"
        >
          <div className="space-y-1 text-white">
            <p className="text-sm">{format.preview(Number(timestamp))}</p>
          </div>
          <Button
            onClick={() => onCopy(format.format, index)}
            className="min-w-[80px]"
          >
            {copiedIndex === index ? (
              <>
                <IconCheck className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              "Copy"
            )}
          </Button>
        </div>
      ))}
    </div>
  );
}
