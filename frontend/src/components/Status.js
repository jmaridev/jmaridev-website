export default function Status({
  status = "Placeholder Status",
  backgroundColour = "bg-neutral-200",
  className = "",
}) {
  return (
    <span
      className={`inline-block rounded-full px-4 text-sm ${backgroundColour} ${className}`}
    >
      {status}
    </span>
  );
}
