export function PollStatus({
  endDate,
  isExpired,
}: {
  endDate: string;
  isExpired: boolean;
}) {
  const formatEndDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    });
  };

  return isExpired ? (
    <span className="text-xs text-red-700">
      This poll has ended on {formatEndDate(endDate)}
    </span>
  ) : (
    <span className="text-xs text-muted-foreground">
      Poll ends on {formatEndDate(endDate)}
    </span>
  );
}
