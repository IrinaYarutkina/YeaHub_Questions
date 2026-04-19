import styles from "./FilterSpecialization.module.scss";
import { FilterBlockTitle, FilterButtonToggle, FilterTag } from "@/shared/ui";

import { useState } from "react";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import { FilterSpecializationSkeleton } from "./FilterSpecializationSkeleton";

type Props = {
  value?: string,
  onChange: (id?: string) => void
}

export const FilterSpecialization = ({value, onChange}: Props) => {
  const { data: specializations = [], isLoading, isFetching } = useGetSpecializationsQuery();
  console.log(specializations)

  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? specializations : specializations.slice(0, 5);

    const isPending = isLoading || isFetching;
  
    if (isPending) {
      return <FilterSpecializationSkeleton />
    }

  return (
    <div className={styles.specialization}>
      <FilterBlockTitle titleBlock="Специализация" />
      <div className={styles.filter_buttons}>
        {visibleItems.map((item) => {
          const active = String(item.id) === value;
            return (
              <FilterTag 
                key={item.id} 
                active={active}
                onClick={() => onChange(active? undefined : String(item.id))}
              >
                {item.title}
              </FilterTag>
            );
        })}
      </div>
      <FilterButtonToggle
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
      />
    </div>
  );
};
