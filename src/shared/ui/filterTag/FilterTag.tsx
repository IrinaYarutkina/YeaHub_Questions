import styles from "./FilterTag.module.scss";
type Props = {
  children: string;
  icon?: string;
  className?: string;
};

export const FilterTag = ({ children, icon, className }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.buttonTag}  ${
        icon ? styles.withIcons : styles.withoutIcons_default
      }
      ${className || ""}`}
    >
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <span className={styles.text}> {children}</span>
    </button>
  );
};
