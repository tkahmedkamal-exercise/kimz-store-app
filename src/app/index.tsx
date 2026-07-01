import { Typography } from "@/components/ui/display";
import { useTheme, useTranslation, useUserPreferences } from "@/hook";
import { Button, StyleSheet, View } from "react-native";

export const Index = () => {
  const { setTheme, setLanguage } = useUserPreferences();
  const theme = useTheme();
  const { direction, t } = useTranslation();

  console.log(direction);

  return (
    <View style={styles.container}>
      <Typography variant="heroBold" color={theme.background.overlay}>
        {t("welcome", { name: "ahmed", age: 25 })}
      </Typography>
      <Button title="Dark Mode" onPress={() => setTheme("dark")} />
      <Button title="Light Mode" onPress={() => setTheme("light")} />
      <Button title="English" onPress={() => setLanguage("en")} />
      <Button title="Arabic" onPress={() => setLanguage("ar")} />
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
