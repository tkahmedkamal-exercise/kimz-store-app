import { spacing } from "@/constants";
import { useTheme } from "@/hook";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const TypographyMapping = {
    lg: {
      userName: {
        font: "mediumBold",
        color: colors.fg.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.fg.tertiary,
      },
    },
    sm: {
      userName: {
        font: "normalBold",
        color: colors.fg.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.fg.secondary,
      },
    },
  } as const;

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: spacing.space12.width,
      alignItems: "center",
    },
  });

  return { styles, colors, TypographyMapping };
};

export default useStyles;
