import { ScrollView, StyleSheet } from "react-native";
import { CONTENT_BOTTOM_GAP } from "../screen-layout/constants";
import { VerticalScrollViewProps } from "./types";

const VerticalScrollView = ({ children, ...rest }: VerticalScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, rest.contentContainerStyle]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: CONTENT_BOTTOM_GAP,
  },
});

export default VerticalScrollView;
