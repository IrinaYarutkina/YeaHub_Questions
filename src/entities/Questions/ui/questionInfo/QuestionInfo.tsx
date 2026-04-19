//кажется это надо в shared?
import { Accordeon } from "@/shared/ui";
import styles from "./questionInfo.module.scss";
import { ROUTES } from "@/shared/config";
import { Link } from "react-router-dom";
import ArrowRight from "@/shared/assets/icons/ArrowRight.svg";
import { QuestionMeta } from "@/shared/ui/questionMeta";
import type { Question } from "../../types/QuestionsTypes";

type Props = {
  question: Question;
};

export const QuestionInfo = ({ question }: Props) => {
  return (
    <div className={styles.questionInfo}>
      <Accordeon title={question.title}>
        <QuestionMeta rate={question.rate} complexity={question.complexity}/>
        <div> {question.shortAnswer} </div>
        <Link to={ROUTES.QUESTION_FOR_LINK(question.id)} className={styles.link}>
          <p className={styles.link_text}> Подробнее</p>
          <img src={ArrowRight} className={styles.ArrowRight} />
        </Link>
      </Accordeon>
    </div>
  );
};
