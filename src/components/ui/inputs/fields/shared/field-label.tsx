import { Typography } from "@/components/ui/display";
import { spacing } from "@/constants";
import { useTheme } from "@/hook";
import { StyleSheet } from "react-native";
import { FieldLabelProps } from "./types";

const FieldLabel = ({ label }: FieldLabelProps) => {
  const colors = useTheme();

  if (!label) return null;
  return (
    <Typography
      variant="normalBold"
      style={styles.label}
      color={colors.fg.primary}
    >
      {label}
    </Typography>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: spacing.space8.height,
  },
});

export default FieldLabel;
