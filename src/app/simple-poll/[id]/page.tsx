"use client";

import { PollOptions } from "@/components/poll/poll-options";
import { PollStatus } from "@/components/poll/poll-status";
import { SharePoll } from "@/components/poll/share-poll";
import type { Poll } from "@/components/poll/types";
import { Button } from "@/components/ui/button";
import { apiRoutes } from "@/lib/api-routes";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function PollPage() {
	const params = useParams<{ id: string }>();
	const router = useRouter();
	const [poll, setPoll] = useState<Poll>();
	const [selectedOption, setSelectedOption] = useState<string>();
	const [voterName, setVoterName] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchPoll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.id]);

	const fetchPoll = async () => {
		try {
			const response = await fetch(apiRoutes.poll(params.id));
			if (!response.ok) throw new Error("Failed to fetch poll");
			const id = await response.json();
			setPoll(id);
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

	const submitVote = async () => {
		if (!selectedOption || isExpired) return;
		if (poll?.requireVoterName && !voterName.trim()) {
			toast.error("Please enter your name");
			return;
		}

		try {
			const response = await fetch(apiRoutes.vote(params.id, selectedOption), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					voterName: voterName.trim() || undefined,
				}),
			});

			if (!response.ok) throw new Error("Failed to submit vote");
			router.push(`/simple-poll/${params.id}/result`);
		} catch (error) {
			console.error("Error submitting vote:", error);
		}
	};

	return (
		<main className="relative">
			<div className="relative min-h-screen z-10 p-8 space-y-8 pt-24 max-w-screen-sm mx-auto">
				<div className="space-y-2">
					<div className="flex justify-between items-baseline">
						<h1 className="text-md font-medium">{poll.question}</h1>
					</div>
					<PollStatus endDate={poll.endDate} isExpired={isExpired} />
				</div>

				<PollOptions
					options={poll.options}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					isExpired={isExpired}
				/>

				{!isExpired && (
					<>
						{poll.requireVoterName && (
							<div className="mt-6">
								<label htmlFor="voter-name" className="block mb-2">
									Your name
								</label>
								<input
									id="voter-name"
									type="text"
									value={voterName}
									onChange={(e) => setVoterName(e.target.value)}
									className="w-full p-2 border rounded"
									placeholder="Enter your name"
									required
								/>
							</div>
						)}

						<Button
							onClick={submitVote}
							disabled={
								!selectedOption || (poll.requireVoterName && !voterName.trim())
							}
							className="w-full"
						>
							Submit Vote
						</Button>

						<div className="w-full flex items-center justify-center gap-2">
							<Link
								href={`/simple-poll/${poll.id}/result`}
								className="text-sm text-primary-500 hover:underline"
							>
								View Results
							</Link>
						</div>
					</>
				)}

				<SharePoll pollId={poll.id} />
			</div>
		</main>
	);
}
