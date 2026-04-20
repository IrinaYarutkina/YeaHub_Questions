
import { QuestionsList } from "@/widgets/questionsList";
import styles from "./BaseQuestions.module.scss";
import { Container } from "@/shared/ui";
import { FiltersBlock } from "@/features/FiltersBlock";

export const BaseQuestions = () => (
  <Container>
    <div className={styles.baseQuestions}>
      <div className={styles.main}> 
        <QuestionsList />
      </div>
      <div className={styles.aside}> 
        <FiltersBlock />
      </div>
    </div>
  </Container>
);
