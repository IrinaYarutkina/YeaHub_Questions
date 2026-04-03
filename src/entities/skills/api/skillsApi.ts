import { yeahubApi } from "@/shared/api/yeahubApi";
import type { SkillResponse } from "../types/skillsTypes";

export const skillsApi = yeahubApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillResponse[], void>({
      query: () => "/skills",
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
