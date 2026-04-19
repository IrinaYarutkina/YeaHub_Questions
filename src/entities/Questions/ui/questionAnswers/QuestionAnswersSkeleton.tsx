import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from './QuestionAnswersSkeleton.module.scss'

export const QuestionAnswersSkeleton = () => {
  return (
    <div className={styles.answer_container}> 
      <Skeleton width={140} height={30} />
      <Skeleton width={700} height={90} /> 
    </div>
  )
}