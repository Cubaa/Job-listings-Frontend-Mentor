import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISingleJob } from "../Types/jobType";
import jobs from "../data.json";

interface IJobs {
  jobs: ISingleJob[];
  tags: string[];
  filteredJobs: ISingleJob[];
}

const initialState: IJobs = {
  jobs,
  tags: [],
  filteredJobs: [],
};

export const jobsSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    filteredJobsAfterAddTag(state, action: PayloadAction<string>) {
      const tagIsExist = state.tags.find((tag) => tag === action.payload);
      if (tagIsExist) return;
      else state.tags.push(action.payload);

      let filteredArr = jobs.filter((job: ISingleJob) => {
        return state.tags.every((tag: string) => {
          return (
            job.role === tag ||
            job.tools.includes(tag) ||
            job.level === tag ||
            job.languages.includes(tag)
          );
        });
      });
      state.jobs = filteredArr;
    },

    filteredJobsAfterRemoveTag(state, action: PayloadAction<string>) {
      const filteredTags = state.tags.filter((tag: string) => {
        return tag !== action.payload;
      });

      state.tags = filteredTags;
      let filteredArr = jobs.filter((job: ISingleJob) => {
        return state.tags.every((tag: string) => {
          return (
            job.role === tag ||
            job.tools.includes(tag) ||
            job.level === tag ||
            job.languages.includes(tag)
          );
        });
      });
      state.jobs = filteredArr;
    },
  },
});

export const { filteredJobsAfterAddTag, filteredJobsAfterRemoveTag } =
  jobsSlice.actions;

export default jobsSlice.reducer;
