import { Icon } from "@/components/icons";
import { View } from "react-native";
import FieldErrorMessage from "./field-error-message";
import FieldLabel from "./field-label";
import { FieldWrapperProps } from "./types";
import useStyles from "./use-styles";

const FieldWrapper = ({
  label,
  fieldIconName,
  children,
  errorMessage,
  currentStatus,
  style,
}: FieldWrapperProps) => {
  const { styles, statusColor } = useStyles(currentStatus);

  return (
    <View style={[styles.container, style]}>
      <FieldLabel label={label} />
      <View style={styles.fieldWrapper}>
        <Icon name={fieldIconName} size={20} color={statusColor} />
        {children}
      </View>
      <FieldErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FieldWrapper;
