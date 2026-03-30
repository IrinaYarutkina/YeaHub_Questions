import { Accordeon } from "@/shared/ui/question-accordeon/Accordeon";
import styles from "./QuestionsList.module.scss";
import { FilterSpecialization } from "@/features/filterSpecialization";

export const QuestionsList = function () {
  return (
    <div className={styles.container}>
      <Accordeon title="Заголовок вопроса" children="vghjlkj" />
      <FilterSpecialization />
    </div>
  );
};
