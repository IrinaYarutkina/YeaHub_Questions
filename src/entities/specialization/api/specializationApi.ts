import { yeahubApi } from "@/shared/api/yeahubApi";
import type { SpecializationResponse } from "../types/specializationsTypes";

export const specializationApi = yeahubApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationResponse[], void>({
      query: () => "/specializations",
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
