import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import styles from './FilterSpecializationSkeleton.module.scss';

export const FilterSpecializationSkeleton = () => {
  return (
    <div className={styles.specialization}>
      <Skeleton width={110} height={25}/>
      
      <div className={styles.filter_buttons}>
        {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={i}
              width={150}
              height={35}
            />
          ))}
      </div>
      <Skeleton width={110} height={20} />
  </div>
  )
}
