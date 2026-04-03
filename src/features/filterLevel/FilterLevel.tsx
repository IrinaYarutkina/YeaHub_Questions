import { FilterBlockTitle } from "@/shared/ui/filterBlockTitle";
import { FilterTag } from "@/shared/ui/filterTag";
import { COMPLEXITY_LEVELS } from "@/shared/types";
import styles from "./FilterLevel.module.scss";
export const FilterLevel = () => {
  const levels = COMPLEXITY_LEVELS || [];

  // if (isLoading) return <p>Загрузка...</p>; //потом заменить
  return (
    <div className={styles.levels}>
      <FilterBlockTitle titleBlock="Уровень сложности" />
      <div className={styles.filter_buttons}>
        {levels.map((item) => (
          <FilterTag key={item.id} children={item.title} />
        ))}
      </div>
    </div>
  );
};

//item = {id: , title: }
