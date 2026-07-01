import { ThemeColors } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import colors from "./colors.json";

const initialState: ThemeColors = colors;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
