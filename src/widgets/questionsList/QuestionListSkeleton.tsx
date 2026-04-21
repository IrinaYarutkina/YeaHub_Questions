import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import styles from './QuestionListSkeleton.module.scss';


export const QuestionListSkeleton = () => {
  return (
    <div className={styles.container_wrap}>
      <div className={styles.questions}> 
      <Skeleton width='25%' height={30}/> 
        <ul className={styles.list}>
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}>
              <Skeleton width='100%' height={56}/>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pagination}> 
        <Skeleton width='40%' height={30} />
      </div>
    </div>
  );
};
