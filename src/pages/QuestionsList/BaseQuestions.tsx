import { FilterBlock } from "@/widgets/filterBlock";
import { QuestionsList } from "@/widgets/questionsList";
import styles from "./BaseQuestions.module.scss";

export const BaseQuestions = () => (
  <div className={styles.baseQuestions}>
    <QuestionsList />
    <FilterBlock />
  </div>
);
