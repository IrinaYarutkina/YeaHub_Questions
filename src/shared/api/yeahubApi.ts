import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const yeahubApi = createApi({
  reducerPath: "yeahubApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: () => ({}),
});
