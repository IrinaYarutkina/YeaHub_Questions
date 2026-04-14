import { FilterBlockTitle } from "@/shared/ui/filterBlockTitle";
import { FilterButtonToggle } from "@/shared/ui/filterButton";
import { FilterTag } from "@/shared/ui/filterTag";
import { useState } from "react";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import styles from "./FilterSkills.module.scss";

export const FilterSkills = () => {
  const { data: response, isLoading } = useGetSkillsQuery();
  const skills = response?.data || [];
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? skills : skills.slice(0, 5);
  if (isLoading) return <p>Загрузка...</p>; //потом заменить
  return (
    <div className={styles.skills}>
      <FilterBlockTitle titleBlock="Навыки" />
      <div className={styles.filter_buttons}>
        {visibleItems.map((item) => (
          <FilterTag key={item.id} children={item.title} />
        ))}
      </div>
      <FilterButtonToggle
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
      />
    </div>
  );
};
