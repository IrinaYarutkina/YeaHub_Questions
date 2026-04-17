import { COMPLEXITY_LEVELS } from "@/shared/types";
import styles from "./FilterComplexity.module.scss";
import { FilterBlockTitle, FilterTag } from "@/shared/ui";

type Props = {
  value?: number[];
  onChange: (value: number[]) => void
}

export const FilterComplexity = ({value = [], onChange}: Props) => {
  const levels = COMPLEXITY_LEVELS || [];

  const selectFilters = (complexity: number) => {
    if (!value.includes(complexity)) {
      onChange([...value, complexity]);
    } else {
      onChange(value.filter(item => item !== complexity));
    }
  };
  // if (isLoading) return <p>Загрузка...</p>; //потом заменить
  return (
    <div className={styles.complexityLevels}>
      <FilterBlockTitle titleBlock="Уровень сложности" />

      <div className={styles.filter_buttons}>
        {levels.map((item) => {
          const active = value.includes(item.id);

          return (
            <FilterTag 
              key={item.id} 
              active={active}
              onClick={() => selectFilters(item.id)}
            >
              {item.title}
            </FilterTag>
          );
        })}
      </div>
    </div>
  );
};

