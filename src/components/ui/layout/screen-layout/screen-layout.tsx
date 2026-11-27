import { View } from "react-native";
import DismissKeyboard from "../dismiss-keyboard/dismiss-keyboard";
import VerticalScrollView from "../vertical-scroll-view/vertical-scroll-view";
import { ScreenLayoutProps } from "./types";
import useStyles from "./use-styles";

const ScreenLayout = ({
  hasTabBar = false,
  paddingSides = "both",
  scrollable = false,
  dismissKeyboardOnTap = false,
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

  const renderContent = () => {
    return (
      <View style={[styles.container, contentContainerStyle]}>{children}</View>
    );
  };

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {renderTopBar?.()}
        <VerticalScrollView {...scrollProps}>{children}</VerticalScrollView>
      </View>
    );
  }

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>
        {renderTopBar?.()}
        {renderContent()}
      </DismissKeyboard>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {renderTopBar?.()}
      {renderContent()}
    </View>
  );
};

export default ScreenLayout;
