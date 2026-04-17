import { yeahubApi } from "@/shared/api/yeahubApi";
import type { Question, QuestionsParams, QuestionsResponse } from "../types/QuestionsTypes";

export const questionApi = yeahubApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsResponse, QuestionsParams>({
      query: (params) => ({
        url: "/questions/public-questions",
        params,
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
