import styles from "@/components/ItemStats/ItemStats.module.scss";

interface ItemStatsProps {
  text: string;
  level: number;
}

function ItemStats({ text, level }: ItemStatsProps) {
  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <p className={styles.item_text}>{text} </p>
        <p className={styles.item_level}> {level}</p>
      </div>
    </div>
  );
}

export default ItemStats;
