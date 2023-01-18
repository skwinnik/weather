export default function FeelsLike({ temp }: { temp: number }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">{temp.toFixed(0)}°</div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}
