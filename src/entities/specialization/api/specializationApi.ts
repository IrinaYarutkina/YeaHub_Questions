import { yeahubApi } from "@/shared/api/yeahubApi";
import type {  SpecializationResponse, SpecializationsApiResponse } from "../types/specializationsTypes";


export const specializationApi = yeahubApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationResponse[], void>({
      query: () => "/specializations",
      transformResponse: (response: SpecializationsApiResponse) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
