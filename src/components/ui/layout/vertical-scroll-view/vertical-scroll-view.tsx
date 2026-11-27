import { scalingMethods } from "@/utils";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";

const { VS } = scalingMethods;

const VerticalScrollView = ({ children, ...rest }: ScrollViewProps) => {
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
    paddingBottom: VS(25),
  },
});

export default VerticalScrollView;
