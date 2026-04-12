import { useGetQuestionByIdQuery } from "@/entities/Questions/api/questionsApi";
import { QuestionAnswers } from "@/entities/Questions/ui/questionAnswers/QuestionAnswers"
import { QuestionNextBack } from "@/features/questionNextBack"
import type { Question } from "@/entities/Questions/types/QuestionsTypes";
import { useParams } from "react-router-dom";
import styles from './questionWidgetBlock.module.scss'
import { BackButton } from "@/shared/ui/backButton/BackButton";
import { QuestionHeader } from "@/entities/Questions/ui/questionHeader";


type Props = {
  question: Question;
}

export const QuestionWidgetBlock = ({question} : Props) => {
  const { id } = useParams();
  const { data, isLoading } = useGetQuestionByIdQuery(Number(id));
  console.log(data?.longAnswer);

  if (isLoading) return <p> Загрузка!</p>;
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
      prevId = {question.id - 1}
      nextId = {question.id + 1}
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