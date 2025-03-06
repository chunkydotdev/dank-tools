import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { PollOption } from "./types";

export function PollOptions({
  options,
  selectedOption,
  setSelectedOption,
  isExpired,
}: {
  options: PollOption[];
  selectedOption?: string;
  setSelectedOption: (id: string) => void;
  isExpired: boolean;
}) {
  return options.map((option) => (
    <div
      key={option.id}
      className={cn(
        "p-4 shadow-md bg-white rounded transition-all border-2 border-white",
        !isExpired && "cursor-pointer hover:shadow-lg",
        selectedOption === option.id &&
          "bg-white border-2 border-primary-500 text-primary-500"
      )}
      onClick={() => setSelectedOption(option.id)}
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>{option.text}</span>
          {selectedOption === option.id && (
            <IconCheck className="w-4 h-4 flex-shrink-0" />
          )}
        </div>
      </div>
    </div>
  ));
}
