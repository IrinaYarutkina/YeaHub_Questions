import styles from "./questionInfo.module.scss";

type Props = {
  text: string;
  level: number;
};
export const QuestionInfo = function ({ text, level }: Props) {
  return (
    <div className={styles.QuestionInfo_Container}>
      <p className={styles.QuestionInfo_Text}> {text}</p>
      <span className={styles.QuestionInfo_Level}> {level}</span>
    </div>
  );
};
