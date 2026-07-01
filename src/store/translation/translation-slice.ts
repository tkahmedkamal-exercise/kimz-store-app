import { createSlice } from "@reduxjs/toolkit";
import translations from "./translations.json";

type InitialState = typeof translations;

const initialState: InitialState = translations;

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {},
});

export default translationSlice.reducer;
