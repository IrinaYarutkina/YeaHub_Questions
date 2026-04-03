import { yeahubApi } from "@/shared/api/yeahubApi";
import type { Question } from "../types/QuestionsTypes";

export const questionApi = yeahubApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<Question[], void>({
      query: () => "/questions",
    }),
  }),
});

export const { useGetQuestionsQuery } = questionApi;
