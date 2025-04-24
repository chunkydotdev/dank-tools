"use client";

import { BounceArrow } from "@/components/bounce-arrow";
import { CreatePollForm } from "@/components/poll/create-poll-form";

export default function CreatePoll() {
	return (
		<main className="relative">
			<section className="relative min-h-screen z-10 p-8 space-y-8 pt-24 max-w-screen-sm mx-auto">
				<h1 className="text-2xl font-bold mb-6">Create a New Poll</h1>
				<CreatePollForm />
				<BounceArrow />
			</section>
			{/* Content Below the Fold */}
			<section className="pb-40">
				<div className="max-w-screen-lg mx-auto p-8 space-y-16">
					<div className="grid md:grid-cols-2 gap-16">
						<section className="space-y-6">
							<h2 className="text-3xl font-semibold">Quick and Easy Polling</h2>
							<div className="text-muted-foreground">
								<p className="mb-4">
									Create polls in seconds and share them with anyone. Perfect
									for:
								</p>
								<ul className="space-y-2 list-none pl-4">
									<li className="flex items-center gap-2 before:content-['•'] before:text-primary-500 before:text-xl before:leading-none">
										Making group decisions
									</li>
									<li className="flex items-center gap-2 before:content-['•'] before:text-primary-500 before:text-xl before:leading-none">
										Planning events
									</li>
									<li className="flex items-center gap-2 before:content-['•'] before:text-primary-500 before:text-xl before:leading-none">
										Gathering feedback
									</li>
									<li className="flex items-center gap-2 before:content-['•'] before:text-primary-500 before:text-xl before:leading-none">
										Team coordination
									</li>
								</ul>
							</div>
						</section>

						<section className="space-y-6">
							<h2 className="text-3xl font-semibold">Key Features</h2>
							<div className="space-y-8">
								<div className="space-y-4">
									<h3 className="text-xl font-medium">Real-time Results</h3>
									<p className="text-muted-foreground">
										Watch votes come in as they happen. See detailed breakdowns
										of voting patterns and participant responses.
									</p>
								</div>

								<div className="space-y-4">
									<h3 className="text-xl font-medium">Customizable Settings</h3>
									<p className="text-muted-foreground">
										Set end dates, require voter names, and add as many options
										as you need. You&apos;re in control of how your poll works.
									</p>
								</div>

								<div className="space-y-4">
									<h3 className="text-xl font-medium">Visual Analytics</h3>
									<p className="text-muted-foreground">
										View voting trends over time with interactive charts and see
										exactly when people are participating.
									</p>
								</div>
							</div>
						</section>
					</div>

					<section className="space-y-6">
						<h2 className="text-3xl font-semibold">Tips for Better Polls</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="space-y-4">
								<h3 className="text-xl font-medium">Clear Questions</h3>
								<p className="text-muted-foreground">
									Keep your questions simple and specific. Avoid double-barreled
									questions that ask multiple things at once.
								</p>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-medium">Timing Matters</h3>
								<p className="text-muted-foreground">
									Set reasonable deadlines that give people enough time to vote
									while maintaining urgency for timely decisions.
								</p>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-medium">Share Widely</h3>
								<p className="text-muted-foreground">
									Use the share link to distribute your poll across any
									platform. The more responses, the better the results.
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
		</main>
	);
}
