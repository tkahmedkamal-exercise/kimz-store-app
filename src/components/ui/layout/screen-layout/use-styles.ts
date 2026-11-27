import { useTheme } from "@/hook";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SIDE_PADDING, TOP_BAR_GAP } from "./constants";
import { UseStylesParams } from "./types";

const useStyles = ({ hasTopBar, hasTabBar, paddingSides }: UseStylesParams) => {
  const colors = useTheme();
  const { top, bottom } = useSafeAreaInsets();

  const paddingTop = hasTopBar ? 0 : top;
  const paddingBottom = hasTabBar ? 0 : bottom;
  const horizontalPaddings = SIDE_PADDING[paddingSides];

  const styles = StyleSheet.create({
    viewWrapper: {
      flex: 1,
      ...horizontalPaddings,
      paddingTop,
      paddingBottom,
      gap: TOP_BAR_GAP,
    },
    scrollViewWrapper: {
      flex: 1,
      ...horizontalPaddings,
      paddingTop,
      paddingBottom,
      gap: TOP_BAR_GAP,
    },
    container: {
      flex: 1,
    },
  });

  return { colors, styles };
};

export default useStyles;
