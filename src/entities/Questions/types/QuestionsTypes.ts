import type { SkillResponse } from "@/entities/skills/types/skillsTypes";
import type { SpecializationResponse } from "@/entities/specialization/types/specializationsTypes";

export type Question = {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: SpecializationResponse[];
  questionSkills: SkillResponse[];
  // questionTopics:
  createdAt: string;
  updatedAt: string;
  // createdBy: string;
  // updatedBy: string;
};
