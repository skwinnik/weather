export default function Pressure({ pressure }: { pressure: number }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {pressure.toFixed(0)}
        <div className="text-xl">hPa</div>
      </div>
    </div>
  );
}
