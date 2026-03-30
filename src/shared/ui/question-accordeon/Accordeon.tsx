import type { ReactNode } from "react";
import styles from "./Accordeon.module.scss";
import arrow from "@/shared/assets/arrow.svg";
import { useToggle } from "@/shared/lib/hooks/useToggle";

type Props = {
  title: string;
  children: ReactNode;
  initialValue?: boolean;
  maxHeight?: string;
};

export const Accordeon = function ({
  title,
  children = "gghjghjghgkjbn nhgygyghvbn",
  initialValue = false,
  maxHeight = "500px",
}: Props) {
  const [isToggled, toggle] = useToggle(initialValue);
  return (
    <div className={styles.cardConteiner}>
      <button
        className={styles.cardBtn}
        type="button"
        onClick={toggle}
        aria-expanded={isToggled}
      >
        <div className={styles.question}>
          <span className={styles.dot}></span>
          <h2 className={styles.title}>{title} </h2>
        </div>
        <div>
          <img
            src={arrow}
            alt=""
            className={`${styles.arrow_close} ${
              isToggled ? styles.arrow_open : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`${styles.answer_wrap} 
        ${isToggled ? styles.answer_open : ""}`}
        style={isToggled ? { maxHeight } : undefined}
        aria-hidden={!isToggled}
      >
        {children}
      </div>
    </div>
  );
};
