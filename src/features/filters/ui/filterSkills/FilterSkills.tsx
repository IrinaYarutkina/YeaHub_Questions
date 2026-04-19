import { useState } from "react";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import styles from "./FilterSkills.module.scss";
import { FilterBlockTitle, FilterButtonToggle, FilterTag } from "@/shared/ui";
import { FilterSkillsSkeleton } from "./FilterSkillsSkeleton";

type Props = {
  value?: number[],
  onChange: (skill: number[]) => void,
  specializationId: string,
}

export const FilterSkills = ({value = [], onChange, specializationId} : Props) => {

  const { data: response, isLoading, isFetching } = useGetSkillsQuery(
    { specializations: specializationId },
		{ skip: !specializationId });

  const skills = response || [];

  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? skills : skills.slice(0, 5);

    const isPending = isLoading || isFetching;
  
    if (isPending) {
      return <FilterSkillsSkeleton />
    }


  const selectFilters = (id: number) => {
    if (!value.includes(id)){
      onChange([...value, id])
    } else {
      onChange(value.filter(item => item !== id))
    }
  }

  return (
    <div className={styles.skills}>
      <FilterBlockTitle titleBlock="Навыки" />
      <div className={styles.filter_buttons}>
        {visibleItems.map((skill) => {

          const active = value.includes(skill.id);

          return (
            <FilterTag 
            key={skill.id} 
            active={active}
            onClick={() => selectFilters(skill.id)}
            >
              {skill.title}
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
