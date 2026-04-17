import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const yeahubApi = createApi({
  reducerPath: "yeahubApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  endpoints: () => ({}),
  tagTypes: ['Questions', 'Specializations', 'Skills'],
});
