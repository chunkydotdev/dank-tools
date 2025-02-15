"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

type DateTimeInputsProps = {
  date: string;
  time: string;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
};

export function DateTimeInputs({
  date,
  time,
  setDate,
  setTime,
}: DateTimeInputsProps) {
  return (
    <div className="rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="text-sm font-medium text-white" htmlFor="date">
            Date
          </label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-white block mt-2"
          />
          <div className="flex justify-between pl-4">
            <Button
              variant="link"
              size="sm"
              onClick={() => setDate(format(new Date(), "yyyy-MM-dd"))}
              className="text-primary-500 p-0"
            >
              Now
            </Button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white" htmlFor="time">
            Time
          </label>
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-white block mt-2"
          />
          <div className="flex justify-between pl-4">
            <Button
              variant="link"
              size="sm"
              onClick={() => setTime(format(new Date(), "HH:mm"))}
              className="text-primary-500 p-0"
            >
              Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
