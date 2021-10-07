import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITags {
  tags: string[];
}

const initialState: ITags = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: "Tags",
  initialState,
  reducers: {
    setTags(state, action: PayloadAction<string>) {
      const tagIsExist = state.tags.find((tag) => tag === action.payload);

      if (tagIsExist) return;
      else state.tags.push(action.payload);
    },
    resetTags(state, action: PayloadAction<string>) {
      const tagIndex = state.tags.findIndex(
        (tag: string) => tag === action.payload
      );

      state.tags.splice(tagIndex, 1);
    },
  },
});

export const { setTags, resetTags } = tagsSlice.actions;

export default tagsSlice.reducer;
