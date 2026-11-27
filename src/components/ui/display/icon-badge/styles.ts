import { IconName } from "@/components/icons/types";
import { StatusVariant } from "@/types";
import { StyleProp, ViewStyle } from "react-native";

export type IconBadgeProps = {
  iconName: IconName;
  color: StatusVariant;
  style?: StyleProp<ViewStyle>;
};
