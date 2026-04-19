import {FilterComplexity, FilterRate, FilterSkills, FilterSpecialization, useFiltersQuestions } from "@/features/filters";
import styles from "./filterBlock.module.scss";
import { SearchInput } from "@/shared/ui";


export const FilterBlock = (  ) => {
  const {objWithFilters, updatesFilters } = useFiltersQuestions();

  
  return (
    <div className={styles.filter_section}>
      {/* поиск */}
      <SearchInput />
      {/*  специал */}
      <FilterSpecialization 
        value={objWithFilters.specialization}
        onChange={spec => updatesFilters({specialization: spec, skills: []})}
      />
      {/* навыки */}
      <FilterSkills 
        value={objWithFilters.skills}
        onChange={skills => updatesFilters({skills})}
        specializationId={objWithFilters.specialization}
      />
      {/* уровень слож */}
      <FilterComplexity
        value={objWithFilters.complexity}
				onChange={complexity => updatesFilters({complexity})}
      />
      {/*  рейтинг */}
      <FilterRate 
        value={objWithFilters.rate}
        onChange={rate => updatesFilters({rate})}
      />
    </div>
  );
};
