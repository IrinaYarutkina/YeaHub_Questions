import type { Question } from "@/entities/Questions/types/QuestionsTypes";
import styles from './questionWidgetBlock.module.scss'
import { QuestionHeader } from "@/entities/Questions/ui";
import { QuestionAnswers } from "@/entities/Questions/ui/questionAnswers/QuestionAnswers"
import { QuestionNextBack } from "@/features/questionNextBack"


type Props = {
  question: Question;
};

export const QuestionWidgetBlock = ({question} : Props) => {
  // console.log(question)
  return (
    <div className={styles.questionWidget_Block}> 
      <QuestionHeader 
        title={question.title}
        description={question.description}
        data={question}
        />
      <QuestionNextBack 
      prevId = {question.id - 1}
      nextId = {question.id + 1}
      />
      <QuestionAnswers 
        title='Краткий ответ'
        contentAnswer={question.shortAnswer}
      />
      <QuestionAnswers 
        title='Развёрнутый ответ'
        contentAnswer={question.longAnswer}
        needExpand
      />
    </div>
  )
}