import { FilterBlockTitle } from "@/shared/ui/filterBlockTitle";
import { FilterButtonToggle } from "@/shared/ui/filterButton";
import { FilterTag } from "@/shared/ui/filterTag";
import { useState } from "react";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
//import { useFilteredQuestions } from "../../hooks/useFilteredQuestions";
import styles from "./FilterSpecialization.module.scss";

export const FilterSpecialization = () => {
  const { data: specializations = [], isLoading } = useGetSpecializationsQuery();
  console.log(specializations)
  const [expanded, setExpanded] = useState(false);

  // const { filters, updateFilters } = useFilteredQuestions();

  const visibleItems = expanded ? specializations : specializations.slice(0, 5);

  // const selectSpecialization = (id: number) => {
  //   updateFilters({
  //     specialization:
  //       filters.specialization === id ? null : id,
  //   });
  // };

  if (isLoading) return <p>Загрузка...</p>; //потом заменить

  
  return (
    <div className={styles.specialization}>
      <FilterBlockTitle titleBlock="Специализация" />
      <div className={styles.filter_buttons}>
        {visibleItems.map((item) => (
          <FilterTag 
            key={item.id} 
            // active={visibleItems.specialization === item.id}   
            // onClick={() => selectSpecialization(item.id)} 
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
