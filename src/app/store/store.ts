import { configureStore } from "@reduxjs/toolkit";
import { yeahubApi } from "@/shared/api/yeahubApi";

const store = configureStore({
  reducer: {
    [yeahubApi.reducerPath]: yeahubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(yeahubApi.middleware),
});
export default store;
