import { Icon } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { useTheme, useTranslation, useUserPreferences } from "@/hook";
import { Button as NativeButton, StyleSheet, View } from "react-native";

export const Index = () => {
  const { setTheme, setLanguage } = useUserPreferences();
  const theme = useTheme();
  const { direction, t } = useTranslation();

  console.log(direction);

  return (
    <View style={styles.container}>
      <Button title="Back" icon="chevron-left" onPress={() => {}} />
      <Icon name="arrow-left" size={50} color={theme.primary.base} reverse />
      <Typography variant="heroBold" color={theme.background.overlay}>
        {t("welcome", { name: "ahmed", age: 25 })}
      </Typography>
      <NativeButton title="Dark Mode" onPress={() => setTheme("dark")} />
      <NativeButton title="Light Mode" onPress={() => setTheme("light")} />
      <NativeButton title="English" onPress={() => setLanguage("en")} />
      <NativeButton title="Arabic" onPress={() => setLanguage("ar")} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 16,
  },
});
