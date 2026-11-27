import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/(main)/(tabs)")}>
        <Text>Got to Home Page</Text>
      </Pressable>
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
