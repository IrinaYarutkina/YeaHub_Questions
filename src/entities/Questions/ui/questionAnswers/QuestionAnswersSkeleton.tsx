import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from './QuestionAnswersSkeleton.module.scss'

export const QuestionAnswersSkeleton = () => {
  return (
    <div className={styles.answer_container}> 
      <Skeleton width='20%' height={30} />
      <Skeleton width='100%' height={90} /> 
    </div>
  )
}