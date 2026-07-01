import { useAppSelector } from "@/store/hooks";
import {
  setLanguage,
  setTheme,
} from "@/store/user-preferences/user-preferences-slice";
import { Language, Theme } from "@/types";
import { useDispatch } from "react-redux";

const useUserPreferences = () => {
  const dispatch = useDispatch();
  const preferences = useAppSelector((state) => state.userPreferences);

  return {
    ...preferences,
    setLanguage: (language: Language) => dispatch(setLanguage(language)),
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
  };
};

export default useUserPreferences;
