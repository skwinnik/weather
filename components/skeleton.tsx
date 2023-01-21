export default function Skeleton({
  height,
  width,
  innerHeight,
}: {
  height?: string;
  width?: string;
  innerHeight?: string;
}) {
  height = height || "h-[1.5em]";
  width = width || "w-8";
  innerHeight = innerHeight || "h-1/2";
  return (
    <>
      <div
        className={`${height} ${width} animate-pulse mx-auto flex items-center`}
      >
        <div
          className={`flex-1 flex bg-gradient-to-r from-primary-600 to-primary-300 rounded ${innerHeight}`}
        ></div>
      </div>
    </>
  );
}
