export default function UvIndex({ uv }: { uv: number }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-3xl">
        {uv}
        <div className="text-xl">{getUvText(uv)}</div>
      </div>
      <div className="text-sm">Lorem Ipsum</div>
    </div>
  );
}

function getUvText(uv: number) {
  if (uv <= 2) {
    return "Low";
  } else if (uv <= 7) {
    return "Moderate";
  } else {
    return "High";
  }
}
