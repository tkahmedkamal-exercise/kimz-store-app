import { Language, Theme } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  language: Language;
  theme: Theme;
};

const initialState: InitialStateType = {
  language: "en",
  theme: "light",
};

const userPreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<Language>) => {
      state.language = payload;
    },
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export const { setLanguage, setTheme } = userPreferences.actions;
export default userPreferences.reducer;
