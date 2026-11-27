import { ColorValue, StyleProp, ViewStyle } from "react-native";
import iconMapper from "./components/icon-mapper";

export type IconProps = {
  color?: ColorValue;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export type IconName = keyof typeof iconMapper;
