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
    <div className={`${className} bg-primary-700/25 rounded-lg p-3`}>
      <div className="text-primary-300 text-sm [&>svg]:h-4 [&>svg]:w-4 [&>svg]:inline-block [&>svg]:align-sub">
        {icon}&nbsp;
        <span>{header}</span>
      </div>
      <div
        className="border-t border-primary-500 mt-3 pt-3"
        // compensate for the icon
        style={{ paddingLeft: 1 }}
      >
        {children}
      </div>
    </div>
  );
}
