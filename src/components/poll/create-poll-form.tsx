"use client";

import { apiRoutes } from "@/lib/api-routes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { DateTimeInputs } from "./date-time-inputs";
import { PollOptionInputs } from "./poll-option-inputs";
import { CreatePollOption } from "./types";

export function CreatePollForm() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [requireVoterName, setRequireVoterName] = useState(false);

  // Set default date and time to one hour from now
  const defaultDateTime = new Date(Date.now() + 60 * 60 * 1000);
  const [endDate, setEndDate] = useState(
    defaultDateTime.toISOString().split("T")[0]
  );
  const [endTime, setEndTime] = useState(
    `${String(defaultDateTime.getHours()).padStart(2, "0")}:${String(
      defaultDateTime.getMinutes()
    ).padStart(2, "0")}`
  );

  const [options, setOptions] = useState<CreatePollOption[]>([
    { text: "" },
    { text: "" },
  ]);

  const createPoll = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const combinedDateTime = new Date(`${endDate}T${endTime}`);
      const response = await fetch(apiRoutes.polls, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          options: options.map((opt) => opt.text),
          endDate: combinedDateTime.toISOString(),
          requireVoterName,
        }),
      });

      if (!response.ok) throw new Error("Failed to create poll");
      const data = await response.json();
      router.push(`/simple-poll/${data.id}`);
    } catch (error) {
      console.error("Error creating poll:", error);
    }
  };

  return (
    <form onSubmit={createPoll} className="space-y-8">
      <div>
        <label className="block mb-2">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="What's your question?"
          required
        />
      </div>

      <DateTimeInputs
        endDate={endDate}
        endTime={endTime}
        setEndDate={setEndDate}
        setEndTime={setEndTime}
      />

      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={requireVoterName}
            onChange={(e) => setRequireVoterName(e.target.checked)}
            className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span>Require voter name</span>
        </label>
      </div>

      <PollOptionInputs options={options} setOptions={setOptions} />

      <Button type="submit" className="w-full">
        Create Poll
      </Button>
    </form>
  );
}
