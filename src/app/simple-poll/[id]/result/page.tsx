"use client";

import { PollStatus } from "@/components/poll/poll-status";
import { Poll } from "@/components/poll/types";
import { VoteTimeline } from "@/components/poll/vote-timeline";
import { apiRoutes } from "@/lib/api-routes";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PollResultPage() {
  const params = useParams<{ id: string }>();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPoll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const fetchPoll = async () => {
    try {
      const response = await fetch(apiRoutes.poll(params.id));
      if (!response.ok) throw new Error("Failed to fetch poll");
      const data = await response.json();
      setPoll(data);
    } catch (error) {
      setError("Failed to load poll");
      console.error("Error fetching poll:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return <div className="flex justify-center p-6">Loading...</div>;
  if (error)
    return <div className="flex justify-center p-6 text-red-500">{error}</div>;
  if (!poll) return null;

  const isExpired = new Date(poll.endDate) < new Date();
  const totalVotes = poll.options.reduce(
    (sum, opt) => sum + (opt.votes || 0),
    0
  );

  return (
    <main className="relative">
      <div className="relative min-h-screen z-10 p-8 space-y-8 pt-24 max-w-screen-sm mx-auto">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{poll.question}</h1>
          <PollStatus endDate={poll.endDate} isExpired={isExpired} />
        </div>

        <div className="space-y-4">
          {poll.options.map((option) => {
            const votes = option.votes || 0;
            const percentage = totalVotes ? (votes / totalVotes) * 100 : 0;

            return (
              <div key={option.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">{option.text}</span>
                  <span className="text-sm text-muted-foreground">
                    {votes} vote{votes !== 1 ? "s" : ""} (
                    {percentage.toFixed(1)}%)
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      percentage > 0 && "bg-primary-500"
                    )}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {option.voters && option.voters.length > 0 && (
                  <div className="text-sm text-muted-foreground px-4 text-ellipsis max-w-full overflow-hidden whitespace-nowrap">
                    {option.voters.map((voter) => voter.voterName).join(", ")}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Total votes: {totalVotes}
        </div>

        {totalVotes > 0 && <VoteTimeline poll={poll} />}
      </div>
    </main>
  );
}
