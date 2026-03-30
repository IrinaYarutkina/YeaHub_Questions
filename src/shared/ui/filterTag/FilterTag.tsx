import styles from "./FilterTag.module.scss";
type Props = {
  children: string;
  icon?: string;
};

export const FilterTag = ({ children, icon }: Props) => {
  return (
    <button type="button" className={styles.withoutIcons_default}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <p className={styles.text}> {children}</p>
    </button>
  );
};
