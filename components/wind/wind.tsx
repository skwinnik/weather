export default function Wind({ speed }: { speed: number }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {speed.toFixed(0)}
        <div className="text-xl">kmph</div>
      </div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}
