import { QuestionAnswersSkeleton } from "@/entities/Questions/ui/questionAnswers/QuestionAnswersSkeleton"
import { QuestionHeaderSkeleton } from "@/entities/Questions/ui/questionHeader/QuestionHeaderSkeleton"
import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from './QuestionWidgetBlockSkeleton.module.scss'

export const QuestionWidgetBlockSkeleton = () => {
  return (
  <div className={styles.questionWidget_Block}> 
    <QuestionHeaderSkeleton />
    <div className={styles.container}> 
    <Skeleton width='40%' height={50}/>

    </div>
    <QuestionAnswersSkeleton />
    <QuestionAnswersSkeleton />
  </div>
  )
}