import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice } from "../reducers/jobs";
import { tagsSlice } from "../reducers/tags";
// ...

export const store = configureStore({
  reducer: {
    tags: tagsSlice.reducer,
    jobs: jobsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
