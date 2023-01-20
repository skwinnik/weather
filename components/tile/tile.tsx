export default function Tile({
  icon,
  header,
  className,
  children,
}: {
  icon: React.ReactNode;
  header: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="bg-primary-700/25 text-primary-300 border-primary-500 rounded-t-lg border-b pt-2 px-3 pb-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:inline-block [&>svg]:align-sub flex-auto flex-grow-0 flex-shrink-0 backdrop-blur sticky top-32 z-30">
        {icon}&nbsp;
        <span className="uppercase font-bold tracking-wider text-xs">
          {header}
        </span>
      </div>
      <div className="bg-primary-700/25 rounded-b-lg pt-1 px-3 pb-3 flex-1">
        {/* compensate for the icon */}
        <div style={{ paddingLeft: 1, height: "100%" }}>{children}</div>
      </div>
    </div>
  );
}
