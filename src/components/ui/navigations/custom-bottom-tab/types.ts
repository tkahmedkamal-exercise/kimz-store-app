import { IconName } from "@/components/icons/types";
import { TabTriggerSlotProps } from "expo-router/ui";
import { StyleProp, ViewStyle } from "react-native";

export type CustomBottomTabButtonProps = TabTriggerSlotProps & {
  label: string;
  iconName: IconName;
  badge?: number;
  style?: StyleProp<ViewStyle>;
};
