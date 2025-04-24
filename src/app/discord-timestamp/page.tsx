"use client";

import { timeFormats } from "@/app/discord-timestamp/constants";
import { BounceArrow } from "@/components/bounce-arrow";
import { DateTimeInputs } from "@/components/discord-timestamp/date-time-inputs";
import { TimeFormatList } from "@/components/discord-timestamp/time-format-list";
import { format } from "date-fns";
import { useState } from "react";

export default function DiscordTime() {
	const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
	const [time, setTime] = useState(format(new Date(), "HH:mm"));
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const timestamp = Math.floor(
		new Date(`${date}T${time}`).getTime() / 1000,
	).toString();

	const handleCopy = async (format: string, index: number) => {
		const tag = format.replace("{{time}}", timestamp);
		await navigator.clipboard.writeText(tag);
		setCopiedIndex(index);
		window.plausible?.("discord-timestamp-copied");
		setTimeout(() => setCopiedIndex(null), 2000);
	};

	return (
		<main className="relative">
			<div className="relative min-h-screen z-10 p-8 space-y-8 pt-24 max-w-screen-sm mx-auto">
				<div className="text-white">
					<h1 className="text-4xl font-bold mb-4">
						Discord Timestamp Generator
					</h1>
					<p className="">
						Create Discord timestamps that display the correct time for every
						user, regardless of their timezone.
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
								Discord Timestamp Generator Tool
							</h2>
							<div className="prose text-slate-200">
								<p>
									Discord timestamps are dynamic time stamps that automatically
									adjust to each user&apos;s local timezone. When you send a
									message with a Discord timestamp, every user will see it
									converted to their own local time, eliminating confusion in
									global communities.
								</p>
								<p>Popular uses for Discord time stamps include:</p>
								<ul>
									<li>Scheduling community events across time zones</li>
									<li>Creating Discord timers for upcoming streams</li>
									<li>Setting deadline reminders with accurate time stamps</li>
									<li>Coordinating gaming sessions globally</li>
								</ul>
							</div>
						</section>

						<section className="space-y-6">
							<h2 className="text-3xl font-semibold">
								Discord Time Format Options
							</h2>
							<div className="space-y-8">
								<div className="space-y-4">
									<h3 className="text-xl font-medium">Short Time Format</h3>
									<p className="text-slate-200">
										Displays only the time (e.g., &quot;9:30 PM&quot;). Perfect
										for same-day events or when the date isn&apos;t relevant.
									</p>
								</div>

								<div className="space-y-4">
									<h3 className="text-xl font-medium">Long Date Time Stamp</h3>
									<p className="text-slate-200">
										Shows the full date and time (e.g., &quot;April 28, 2024
										9:30 PM&quot;). Ideal for future events when precise Discord
										time stamps are needed.
									</p>
								</div>

								<div className="space-y-4">
									<h3 className="text-xl font-medium">Relative Time Stamp</h3>
									<p className="text-slate-200">
										Creates a Discord timer that displays time relative to now
										(e.g., &quot;in 2 days&quot;). Great for emphasizing how
										soon or far away something is.
									</p>
								</div>
							</div>
						</section>
					</div>

					<section className="space-y-6">
						<h2 className="text-3xl font-semibold">
							Tips for Using Discord Time Stamps
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="space-y-4">
								<h3 className="text-xl font-medium">Select the Right Format</h3>
								<p className="text-slate-200">
									Choose the Discord timestamp format that best fits your
									message. Use short time for same-day events, and long date for
									future planning.
								</p>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-medium">
									Preview Your Time Stamps
								</h3>
								<p className="text-slate-200">
									Check how your Discord time stamp will appear before sending
									it. This helps ensure your message will be clear to all users.
								</p>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-medium">
									Global Discord Communities
								</h3>
								<p className="text-slate-200">
									For international servers, always use Discord timestamps
									instead of plain text times to avoid timezone confusion.
								</p>
							</div>
						</div>
					</section>

					<section className="space-y-6">
						<h2 className="text-3xl font-semibold">
							Advanced Discord Timestamp Usage
						</h2>
						<div className="prose text-slate-200">
							<p>
								Discord time stamps can be combined with other Discord markdown
								features. You can embed these timestamps in bold text, lists, or
								even code blocks for better formatting in your Discord messages.
							</p>
							<p>
								For developers and Discord bot creators, timestamps can be
								generated programmatically using Unix timestamps, making this
								Discord timestamp generator perfect for automated announcements
								and event management.
							</p>
						</div>
					</section>
				</div>
			</section>
		</main>
	);
}
