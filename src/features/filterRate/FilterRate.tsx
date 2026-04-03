import { FilterBlockTitle } from "@/shared/ui/filterBlockTitle";
import { FilterTag } from "@/shared/ui/filterTag";
import { RATING_LEVELS } from "@/shared/types";
import styles from "./FilterRate.module.scss";

export const FilterRate = () => {
  const levels = RATING_LEVELS || [];
  return (
    <div className={styles.levels}>
      <FilterBlockTitle titleBlock="Рейтинг" />
      <div className={styles.filter_buttons}>
        {levels.map((item) => (
          <FilterTag key={item.id} children={item.title} />
        ))}
      </div>
    </div>
  );
};
