import { StyleProp, ViewStyle } from "react-native";

export type UserGreetingProps = {
  size?: "sm" | "lg";
  imgSrc?: string;
  userName: string;
  meta: string;
  style?: StyleProp<ViewStyle>;
};
