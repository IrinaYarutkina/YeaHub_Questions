import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import styles from './FilterSkillsSkeleton.module.scss';

export const FilterSkillsSkeleton = () => {
  return (
    <div className={styles.skills}>
      <Skeleton width={110} height={25}/>

      <div className={styles.filter_buttons}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton
            key={i}
            width='35%'
            height={35}
          />
        ))}
      </div>
      <Skeleton width={110} height={20} />
    </div>
  );
}