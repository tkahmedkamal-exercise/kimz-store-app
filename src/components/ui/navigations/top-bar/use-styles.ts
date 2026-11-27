import { spacing } from "@/constants";
import { useTheme } from "@/hook";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const { top } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    safeAreaView: {
      paddingTop: top,
    },
    container: {
      height: VS(50),
      alignSelf: "stretch",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: spacing.space16.width,
      backgroundColor: colors.background.base,
    },
  });

  return { colors, styles };
};

export default useStyles;
