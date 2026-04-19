import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import styles from './QuestionHeaderSkeleton.module.scss';


export const QuestionHeaderSkeleton = () => {
  return (
    <div className={styles.header_container}> 
      <Skeleton width={400} height={30}/>
      <Skeleton width={500} height={60}/>
    </div>
  )
}