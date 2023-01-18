export default function Visibility({ distance }: { distance: number }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">{distance.toFixed(0)} km</div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}
