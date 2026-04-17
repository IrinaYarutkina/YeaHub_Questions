//кажется это надо в shared?
import { Accordeon } from "@/shared/ui";
import styles from "./questionInfo.module.scss";
import { ROUTES } from "@/shared/config";
import { Link } from "react-router-dom";
import ArrowRight from "@/shared/assets/icons/ArrowRight.svg";

type Props = {
  title: string;
  shortAnswer: React.ReactNode;
  id: number;
};
export const QuestionInfo = ({ title, shortAnswer, id }: Props) => {
  return (
    <div className={styles.questionInfo}>
      <Accordeon title={title}>
        <div className={styles.questionInfo_filters}>
          <p className={styles.questionInfo_text}>
            Рейтинг: <span className={styles.questionInfo_level}> 4 </span>
          </p>
          <p className={styles.questionInfo_text}>
            Сложность: <span className={styles.questionInfo_level}> 10 </span>
          </p>
        </div>
        <div> {shortAnswer} </div>
        <Link to={ROUTES.QUESTION_FOR_LINK(id)} className={styles.link}>
          <p className={styles.link_text}> Подробнее</p>
          <img src={ArrowRight} className={styles.ArrowRight} />
        </Link>
      </Accordeon>
    </div>
  );
};
