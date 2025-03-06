"use client";

import { CreatePollForm } from "@/components/poll/create-poll-form";

export default function CreatePoll() {
  return (
    <main className="relative">
      <div className="relative min-h-screen z-10 p-8 space-y-8 pt-24 max-w-screen-sm mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create a New Poll</h1>
        <CreatePollForm />
      </div>
    </main>
  );
}
