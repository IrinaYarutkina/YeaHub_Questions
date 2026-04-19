import { useParams } from "react-router-dom";
import { useGetQuestionByIdQuery } from "@/entities/Questions/api/questionsApi";

import { QuestionWidgetBlock } from '@/widgets/questionWidgetBlock/questionWidgetBlock';
import styles from './Question.module.scss'
import { Guru } from '@/widgets/Guru';
import { BackButton } from "@/shared/ui";
import { FiltersQuestionInfo } from "@/widgets/questionInfo";
import { QuestionSkeleton } from "./QuestionSkeleton";

export const Question = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetQuestionByIdQuery(Number(id));

    const isPending = isLoading || isFetching
  
    if (isPending) {
      return <QuestionSkeleton  />
    }
  if (!data) return null
  
  return (
    <div> 

      <nav className={styles.nav_backButton}>
        <BackButton to="/questions" title="Назад"/>
      </nav>

      <div className={styles.page_container}> 
        <QuestionWidgetBlock question={data}/>
        <div className={styles.sidebar}>
          <FiltersQuestionInfo question={data}/>
          <Guru question={data} />
        </div>
      </div>

    </div>
  )
};