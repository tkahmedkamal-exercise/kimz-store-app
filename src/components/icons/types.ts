import { StyleProp, ViewStyle } from "react-native";
import iconMapper from "./components/icon-mapper";

export type IconProps = {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export type IconName = keyof typeof iconMapper;
