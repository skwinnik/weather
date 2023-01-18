import styles from "./tile.module.scss";
export default async function Tile({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.tile}>{children}</div>;
}
