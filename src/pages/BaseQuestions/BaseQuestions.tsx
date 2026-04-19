import { FilterBlock } from "@/widgets/filterBlock";
import { QuestionsList } from "@/widgets/questionsList";
import styles from "./BaseQuestions.module.scss";
import { Container } from "@/shared/ui";

export const BaseQuestions = () => (
  <Container>
    <div className={styles.baseQuestions}>
      <QuestionsList />
      <FilterBlock />
    </div>
  </Container>
);
