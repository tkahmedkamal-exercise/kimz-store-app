import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import themeReducer from "./theme/theme-slice";
import translationReducer from "./translation/translation-slice";
import userPreferences from "./user-preferences/user-preferences-slice";

const userPreferencesPersistConfig = {
  key: "userPreferences",
  storage: AsyncStorage,
  version: 0,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  translation: translationReducer,
  userPreferences: persistReducer(
    userPreferencesPersistConfig,
    userPreferences,
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(devToolsEnhancer()),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
