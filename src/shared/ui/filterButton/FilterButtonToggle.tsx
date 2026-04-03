import styles from "./FilterButtonToggle.module.scss";
type Props = {
  onToggle: () => void;
  showAll?: string;
  hide?: string;
  expanded: boolean;
};

export const FilterButtonToggle = ({
  onToggle,
  showAll = "Посмотреть все",
  hide = "Скрыть",
  expanded,
}: Props) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={styles.button_toggle}
      aria-expanded={expanded}
    >
      {expanded ? hide : showAll}
    </button>
  );
};
