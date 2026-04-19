import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from'./QuestionSkeleton.module.scss'

import { QuestionWidgetBlockSkeleton } from "@/widgets/questionWidgetBlock/QuestionWidgetBlockSkeleton"
import { FiltersQuestionInfoSkeleton } from "@/widgets/questionInfo/FiltersQuestionInfoSkeleton"
import { GuruSkeleton } from "@/widgets/Guru/GuruSkeleton"


export const QuestionSkeleton = () => {
  return (
  <div> 
    <Skeleton  width={80} height={30} className={styles.btn_skeleton}/>
    
    <div className={styles.page_container}> 
      <QuestionWidgetBlockSkeleton />

      <div className={styles.sidebar}>
        <FiltersQuestionInfoSkeleton />
        <GuruSkeleton />

      </div>
    </div>
  </div>
  )
}