import { radius, spacing } from "@/constants";
import { useTheme } from "@/hook";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { HS, VS } = scalingMethods;

const useStyle = (isFocused?: boolean) => {
  const colors = useTheme();
  const { bottom } = useSafeAreaInsets();

  const focusedColor = isFocused ? colors.primary.base : colors.fg.tertiary;

  const styles = StyleSheet.create({
    safeAreaView: {
      backgroundColor: colors.background.base,
      paddingBottom: bottom,
    },
    tabBar: {
      height: VS(71),
      borderTopWidth: HS(1),
      borderTopColor: colors.border.default,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    tabItem: {
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.height,
      paddingVertical: VS(12),
      borderTopWidth: HS(2),
      borderTopColor: isFocused ? colors.primary.base : "transparent",
    },
    iconWrapper: {
      alignItems: "center",
      justifyContent: "center",
    },
    badge: {
      position: "absolute",
      top: -VS(5),
      end: -HS(12),
      width: HS(19),
      height: VS(19),
      borderRadius: radius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.danger.base,
    },
  });

  return { colors, styles, focusedColor };
};

export default useStyle;
