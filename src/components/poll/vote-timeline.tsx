import { useMemo } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Poll, Voter } from "./types";

interface VoteCount {
  timestamp: string;
  votes: number;
  date: Date;
}

export function VoteTimeline({ poll }: { poll: Poll }) {
  const data = useMemo(() => {
    // Collect all votes with their timestamps
    const allVotes: Voter[] = poll.options.flatMap((opt) => opt.voters || []);
    if (allVotes.length === 0) return [];

    const now = new Date();
    const endDate = new Date(poll.endDate);
    const startDate = new Date(allVotes[0].timestamp); // First vote time

    // Use poll end date or current time, whichever is earlier
    const timelineEnd = endDate < now ? endDate : now;

    const hoursDiff =
      (timelineEnd.getTime() - startDate.getTime()) / (1000 * 60 * 60);

    // Choose time grouping based on duration
    let timeFormat: Intl.DateTimeFormatOptions;
    let intervalMs: number;

    if (hoursDiff <= 1) {
      // Less than 1 hour - group by 5 minutes
      timeFormat = {
        hour: "numeric",
        minute: "2-digit",
      };
      intervalMs = 5 * 60 * 1000; // 5 minutes
    } else if (hoursDiff <= 48) {
      // Less than 48 hours - group by hour
      timeFormat = {
        month: "short",
        day: "numeric",
        hour: "numeric",
      };
      intervalMs = 60 * 60 * 1000; // 1 hour
    } else {
      // More than 48 hours - group by day
      timeFormat = {
        month: "short",
        day: "numeric",
      };
      intervalMs = 24 * 60 * 60 * 1000; // 1 day
    }

    // Generate all time slots from start to end
    const timeSlots: VoteCount[] = [];
    let currentTime = new Date(startDate);
    currentTime.setTime(
      Math.floor(currentTime.getTime() / intervalMs) * intervalMs
    ); // Round to nearest interval

    while (currentTime <= timelineEnd) {
      timeSlots.push({
        timestamp: currentTime.toLocaleString(undefined, timeFormat),
        votes: 0,
        date: new Date(currentTime),
      });
      currentTime = new Date(currentTime.getTime() + intervalMs);
    }

    // Count votes for each time slot
    allVotes.forEach((vote) => {
      const voteDate = new Date(vote.timestamp);
      const slotIndex = Math.floor(
        (voteDate.getTime() - startDate.getTime()) / intervalMs
      );
      if (slotIndex >= 0 && slotIndex < timeSlots.length) {
        timeSlots[slotIndex].votes++;
      }
    });

    return timeSlots;
  }, [poll]);

  if (data.length === 0) return null;

  return (
    <div className="h-64 mt-8">
      <h2 className="text-lg font-semibold mb-4">Vote Timeline</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={0}>
          <XAxis
            dataKey="timestamp"
            tick={{ fontSize: 12 }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            dataKey="votes"
            fill="rgb(var(--primary-500))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
