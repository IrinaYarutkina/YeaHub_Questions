import { yeahubApi } from "@/shared/api/yeahubApi";
import type { SkillResponse } from "../types/skillsTypes";

export const skillsApi = yeahubApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillResponse[], { limit?: number; specializations?: string}
    >({
      query: ({limit, specializations}) => ({
        url: "/skills",
        params: {limit, specializations }
      }),
      transformResponse: (response: {data: SkillResponse[]}) => response.data,
      providesTags: ['Skills']
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
