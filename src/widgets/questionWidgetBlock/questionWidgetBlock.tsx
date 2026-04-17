import { useGetQuestionByIdQuery } from "@/entities/Questions/api/questionsApi";
import { QuestionAnswers } from "@/entities/Questions/ui/questionAnswers/QuestionAnswers"
import { QuestionNextBack } from "@/features/questionNextBack"

import { useParams } from "react-router-dom";
import styles from './questionWidgetBlock.module.scss'
import { BackButton } from "@/shared/ui/backButton/BackButton";
import { QuestionHeader } from "@/entities/Questions/ui";


export const QuestionWidgetBlock = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetQuestionByIdQuery(Number(id));
  if (isLoading || !data) return <p>Загрузка!</p>;
  // console.log(data)

  return (
    <div className={styles.questionWidget_Block}> 
      <nav className={styles.nav_backButton}>
        <BackButton to="/questions" title="Назад"/>
      </nav>
      <QuestionHeader 
        title={data?.title}
        description={data?.description}
        />
      <QuestionNextBack 
      prevId = {data.id - 1}
      nextId = {data.id + 1}
      />
      <QuestionAnswers 
        title='Краткий ответ'
        contentAnswer={data?.shortAnswer}
      />
      <QuestionAnswers 
        title='Развёрнутый ответ'
        contentAnswer={data?.longAnswer}
        needExpand
      />
    </div>
  )
}