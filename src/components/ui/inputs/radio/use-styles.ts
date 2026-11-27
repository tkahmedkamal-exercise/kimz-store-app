import { radius } from "@/constants";
import opacity from "@/constants/opacity";
import { useTheme } from "@/hook";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyle = (isActive: boolean, disabled?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: HS(20),
      height: VS(20),
      backgroundColor: colors.background.base,
      borderRadius: radius.full,
      borderWidth: HS(1.5),
      borderColor: isActive ? colors.primary.base : colors.border.default,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
    indicator: {
      width: HS(10),
      height: VS(10),
      borderRadius: radius.full,
      backgroundColor: colors.primary.base,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });
  return { styles };
};

export default useStyle;
