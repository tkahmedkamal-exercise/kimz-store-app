import { Typography } from "@/components/ui/display";
import { StyleSheet, View } from "react-native";

export const Index = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heroBold">Home Screen</Typography>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
