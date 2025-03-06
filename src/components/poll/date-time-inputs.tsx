export function DateTimeInputs({
  endDate,
  endTime,
  setEndDate,
  setEndTime,
}: {
  endDate: string;
  endTime: string;
  setEndDate: (date: string) => void;
  setEndTime: (time: string) => void;
}) {
  const minDate = new Date().toISOString().split("T")[0];
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div className="mb-4">
      <label className="block mb-2">End Date and Time</label>
      <div className="flex gap-4">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          min={minDate}
          className="flex-1 p-2 border rounded"
          required
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          min={endDate === minDate ? currentTime : undefined}
          className="w-32 p-2 border rounded"
          required
        />
      </div>
    </div>
  );
}
