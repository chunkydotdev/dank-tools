"use client";

import { timeFormats } from "@/app/discord-time-tag/constants";
import { BounceArrow } from "@/components/bounce-arrow";
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
    <main className="relative">
      <div className="relative min-h-screen z-10 p-8 space-y-8 pt-24 max-w-screen-sm mx-auto">
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
        <BounceArrow />
      </div>

      <section className="pb-40 text-white">
        <div className="max-w-screen-lg mx-auto p-8 space-y-16">
          <div className="grid md:grid-cols-2 gap-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Understanding Discord Timestamps
              </h2>
              <div className="prose text-slate-200">
                <p>
                  Discord timestamps are a powerful feature that automatically
                  adjusts to each user&apos;s local timezone. When you send a
                  message with a timestamp, every user will see it in their own
                  local time, eliminating confusion in global communities.
                </p>
                <p>Common use cases include:</p>
                <ul>
                  <li>Scheduling community events</li>
                  <li>Coordinating meetings across timezones</li>
                  <li>Setting reminders for deadlines</li>
                  <li>Announcing stream times</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Format Options</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Short Time</h3>
                  <p className="text-slate-200">
                    Displays only the time (e.g., &quot;9:30 PM&quot;). Perfect
                    for same-day events or when the date isn&apos;t relevant.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Long Date</h3>
                  <p className="text-slate-200">
                    Shows the full date and time (e.g., &quot;April 28, 2024
                    9:30 PM&quot;). Ideal for future events and important
                    deadlines.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Relative Time</h3>
                  <p className="text-slate-200">
                    Displays time relative to now (e.g., &quot;in 2 days&quot;).
                    Great for emphasizing how soon or far away something is.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Tips for Using Timestamps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Choose the Right Format</h3>
                <p className="text-slate-200">
                  Select the format that best fits your message. Use short time
                  for same-day events, and long date for future planning.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Test Your Timestamps</h3>
                <p className="text-slate-200">
                  Preview how your timestamp will look before sending it. This
                  helps ensure your message will be clear to all users.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Consider Your Audience</h3>
                <p className="text-slate-200">
                  For global communities, always use timestamps instead of plain
                  text times to avoid timezone confusion.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Advanced Usage</h2>
            <div className="prose text-slate-200">
              <p>
                Discord timestamps can be combined with other Discord markdown
                features. You can embed them in bold text, lists, or even code
                blocks. This flexibility allows you to create clear and
                well-formatted messages for your community.
              </p>
              <p>
                For developers and bot creators, timestamps can be generated
                programmatically using Unix timestamps, making them perfect for
                automated announcements and event management.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
