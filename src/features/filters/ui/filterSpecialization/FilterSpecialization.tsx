import styles from "./FilterSpecialization.module.scss";
import { FilterBlockTitle, FilterButtonToggle, FilterTag } from "@/shared/ui";

import { useState } from "react";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";

export const FilterSpecialization = () => {
  const { data: specializations = [], isLoading } = useGetSpecializationsQuery();
  console.log(specializations)

  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? specializations : specializations.slice(0, 5);

  if (isLoading) return <p>Загрузка...</p>; //потом заменить

  
  return (
    <div className={styles.specialization}>
      <FilterBlockTitle titleBlock="Специализация" />
      <div className={styles.filter_buttons}>
        {visibleItems.map((item) => (
          <FilterTag 
            key={item.id} 
          >
            {item.title}
          </FilterTag>
        ))}
      </div>
      <FilterButtonToggle
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
      />
    </div>
  );
};
