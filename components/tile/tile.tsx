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
    <div
      className={`${className} bg-primary-700/25 rounded-lg p-3 flex flex-col overflow-hidden`}
    >
      <div className="text-primary-300 text-xs sm:text-sm [&>svg]:h-4 [&>svg]:w-4 [&>svg]:inline-block [&>svg]:align-sub flex-auto flex-grow-0 flex-shrink-0">
        {icon}&nbsp;
        <span className="uppercase font-bold tracking-wider text-xs">
          {header}
        </span>
      </div>
      <div
        className="border-t border-primary-500 mt-2 pt-2 flex-1"
        // compensate for the icon
        style={{ paddingLeft: 1 }}
      >
        {children}
      </div>
    </div>
  );
}
