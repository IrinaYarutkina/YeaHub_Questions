import { yeahubApi } from "@/shared/api/yeahubApi";
import type { Question, QuestionsResponse } from "../types/QuestionsTypes";

export const questionApi = yeahubApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsResponse,{ page: number; limit?: number }>({
      query: ({ page, limit = 10 }) => ({
        url: "/questions/public-questions",
        params: { page, limit },
      }),
      // transformResponse: (response: { data: Question[] }) => response.data,
    }),
    getQuestionById: build.query<Question, number>({
      query: (id) => ({
        url: `/questions/public-questions/${id}`,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
