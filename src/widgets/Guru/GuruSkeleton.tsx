import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from './GuruSkeleton.module.scss'; 

export const GuruSkeleton = () => {
  return (
    <div className={styles.container}> 
      <Skeleton width='75%' height={25}/>
      <Skeleton width='65%' height={25}/>
      <Skeleton width='100%' height={40}/>
  </div>
  )
}