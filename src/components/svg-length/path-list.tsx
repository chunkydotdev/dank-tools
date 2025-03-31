"use client";

import { Button } from "@/components/ui/button";
import { getSVGContent } from "@/lib/get-svg-content";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

type PathInfo = {
  path: string;
  length: number;
  color: string;
};

type PathListProps = {
  paths: PathInfo[];
};

export function PathList({ paths }: PathListProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (length: number, index: number) => {
    await navigator.clipboard.writeText(length.toString());
    setCopiedIndex(index);
    window.plausible?.("svg-path-length-copied");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-4">
      {paths.map((path, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-black/10 hover:bg-black/20 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white p-2">
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: getSVGContent(path.path),
                }}
              />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Path {index + 1}
              </p>
              <p className="text-2xl font-bold">{path.length.toFixed(2)}</p>
            </div>
          </div>
          <Button size="sm" onClick={() => handleCopy(path.length, index)}>
            {copiedIndex === index ? (
              <>
                <IconCheck className="h-4 w-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <IconCopy className="h-4 w-4 mr-2" />
                Copy length
              </>
            )}
          </Button>
        </div>
      ))}
    </div>
  );
}
