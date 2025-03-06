import { IconCopy } from "@tabler/icons-react";
import { toast } from "sonner";

export function SharePoll({ pollId }: { pollId: string }) {
  const onClick = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/simple-poll/${pollId}`
    );
    toast.success("Poll link copied to clipboard");
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Share this poll</h2>
      <button
        className="flex flex-row items-center justify-between w-full py-2 px-4 shadow-inner rounded bg-gray-200 cursor-pointer hover:bg-gray-300"
        onClick={onClick}
      >
        <span className="text-left">{`${window.location.origin}/simple-poll/${pollId}`}</span>
        <IconCopy className="w-4 h-4 flex-shrink-0" />
      </button>
    </div>
  );
}
