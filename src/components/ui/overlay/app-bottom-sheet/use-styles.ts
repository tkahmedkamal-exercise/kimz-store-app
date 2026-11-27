import { radius, spacing } from "@/constants";
import { useTheme } from "@/hook";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    backDrop: {
      backgroundColor: colors.background.overlay,
    },
    bottomSheet: {
      backgroundColor: colors.background.base,
      borderRadius: radius.sheet,
      shadowColor: colors.misc.shadow,
      shadowOffset: {
        width: 0,
        height: -VS(4),
      },
      shadowOpacity: 0.08,
      shadowRadius: HS(16),
      elevation: 8,
    },
    handleStyle: {
      paddingTop: spacing.space16.height,
      paddingBottom: 0,
    },
    handleIndicatorStyle: {
      width: HS(44),
      height: VS(4),
      backgroundColor: colors.border.default,
    },
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: spacing.space24.width,
      paddingVertical: spacing.space16.height,
    },
    title: {
      color: colors.fg.primary,
      textAlign: "center",
    },
    description: {
      color: colors.fg.secondary,
      textAlign: "center",
    },
    content: {
      flex: 1,
      alignSelf: "stretch",
      marginTop: spacing.space16.height,
    },
  });

  return { styles };
};

export default useStyles;
