import { View } from "react-native";
import DismissKeyboard from "../dismiss-keyboard/dismiss-keyboard";
import VerticalScrollView from "../vertical-scroll-view/vertical-scroll-view";
import { ScreenLayoutProps } from "./types";
import useStyles from "./use-styles";

const ScreenLayout = ({
  hasTabBar = false,
  paddingSides = "both",
  scrollable = false,
  children,
  renderTopBar,
  contentContainerStyle,
  scrollProps,
}: ScreenLayoutProps) => {
  const { styles } = useStyles({
    hasTopBar: !!renderTopBar,
    hasTabBar,
    paddingSides,
  });

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {renderTopBar?.()}
        <DismissKeyboard style={[styles.container, contentContainerStyle]}>
          <VerticalScrollView {...scrollProps}>{children}</VerticalScrollView>
        </DismissKeyboard>
      </View>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {renderTopBar?.()}
      <DismissKeyboard style={[styles.container, contentContainerStyle]}>
        {children}
      </DismissKeyboard>
    </View>
  );
};

export default ScreenLayout;
