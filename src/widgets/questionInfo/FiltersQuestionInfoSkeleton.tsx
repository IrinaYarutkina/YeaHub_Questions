import { Skeleton } from "@/shared/ui/skeleton/Skeleton"
import styles from './FiltersQuestionInfoSkeleton.module.scss';

export const FiltersQuestionInfoSkeleton = () => {
  return (
    <div className={styles.container}> 

      <div className={styles.container_part}>
        <Skeleton width={80} height={20}/>
        <div className={styles.container_meta}> 
          <Skeleton width={100} height={30}/> 
          <Skeleton width={100} height={30}/> 
        </div>
      </div>

      <div className={styles.container_part}>
        <Skeleton width={80} height={20}/>
        <div className={styles.tags}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            width={100}
            height={35}
          />
        ))}
        </div>
      </div>

      <div className={styles.container_part}> 
        <Skeleton width={80} height={20}/>

        <ul className={styles.keywords}> 
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              width={60}
              height={25}
            />
          ))}
        </ul>

      </div>

      <Skeleton width={150} height={18}/>


    </div>
  )
}