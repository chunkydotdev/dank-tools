"use client";

import { timeFormats } from "@/app/discord-time-tag/constants";
import { DateTimeInputs } from "@/components/discord-time-tag/date-time-inputs";
import { TimeFormatList } from "@/components/discord-time-tag/time-format-list";
import { format } from "date-fns";
import { useState } from "react";

export default function DiscordTimeTag() {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [time, setTime] = useState(format(new Date(), "HH:mm"));
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const timestamp = Math.floor(
    new Date(`${date}T${time}`).getTime() / 1000
  ).toString();

  const handleCopy = async (format: string, index: number) => {
    const tag = format.replace("{{time}}", timestamp);
    await navigator.clipboard.writeText(tag);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="relative min-h-screen pt-16">
      <div className="relative z-10 p-8 space-y-8 max-w-screen-sm mx-auto">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Discord Time Tag Generator
          </h1>
          <p className="">
            Generate Discord timestamps that will show the correct time for
            every user, regardless of their timezone.
          </p>
        </div>

        <DateTimeInputs
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
        />

        <TimeFormatList
          timeFormats={timeFormats}
          timestamp={timestamp}
          copiedIndex={copiedIndex}
          onCopy={handleCopy}
        />
      </div>
    </main>
  );
}
