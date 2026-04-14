import { FilterLevel, FilterRate, FilterSkills, FilterSpecialization } from "@/features/filters";

import styles from "./filterBlock.module.scss";
import { SearchInput } from "@/shared/ui/searchInput";

export const FilterBlock = () => {
  return (
    <div className={styles.filter_section}>
      {/* поиск */}
      <SearchInput />
      {/*  специал */}
      <FilterSpecialization />
      {/* навыки */}
      <FilterSkills />
      {/* уровень слож */}
      <FilterLevel />
      {/*  рейтинг */}
      <FilterRate />
    </div>
  );
};
