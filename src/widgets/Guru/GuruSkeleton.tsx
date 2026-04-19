import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from './GuruSkeleton.module.scss'; 

export const GuruSkeleton = () => {
  return (
    <div className={styles.container}> 
      <Skeleton width={250} height={25}/>
      <Skeleton width={200} height={25}/>
      <Skeleton width={320} height={40}/>
  </div>
  )
}