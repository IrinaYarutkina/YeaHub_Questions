import { RATING_LEVELS } from "@/shared/types";
import styles from "./FilterRate.module.scss";
import { FilterBlockTitle, FilterTag } from "@/shared/ui";


type Props = {
  value?: number[];
  onChange: (value: number[]) => void
}
export const FilterRate = ({value = [], onChange}: Props) => {
  const levels = RATING_LEVELS || [];

  const selectFilters = (rate: number) => {
    if (!value.includes(rate)) {
      onChange([...value, rate]);
    } else {
      onChange(value.filter(item => item !== rate));
    }
  };

  return (
    <div className={styles.levels}>
      <FilterBlockTitle titleBlock="Рейтинг" />
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
        } )}
      </div>
    </div>
  );
}; 
