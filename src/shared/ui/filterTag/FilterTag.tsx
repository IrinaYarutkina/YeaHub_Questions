import styles from "./FilterTag.module.scss";

type Props = {
  children: string;
  icon?: string;
  className?: string;
  active?: boolean; 
  onClick?: () => void; 
};

export const FilterTag = ({ children, icon, className, active, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.buttonTag}  
      ${icon ? styles.withIcons : styles.withoutIcons_default}
      ${active ? styles.active : "" }
      ${className || ""}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <span className={styles.text}> {children}</span>
    </button>
  );
};
