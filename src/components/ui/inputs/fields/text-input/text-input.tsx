import { Icon } from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";
import FieldWrapper from "../shared/field-wrapper";
import useStyles from "../shared/use-styles";
import { fieldCurrentStatus } from "../shared/utils";
import { TextInputProps } from "./types";

const TextInput = ({
  label,
  placeholder,
  iconName,
  type,
  value,
  errorMessage,
  onChangeText,
  clearInput,
  style,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const currentStatus = fieldCurrentStatus(value, isFocused, errorMessage);
  const { styles, colors } = useStyles(currentStatus);

  const resolvedIconName = type === "password" ? "lock" : iconName;

  return (
    <FieldWrapper
      label={label}
      fieldIconName={resolvedIconName}
      errorMessage={errorMessage}
      currentStatus={currentStatus}
      style={style}
    >
      <RNTextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.fg.tertiary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" && !passwordVisible}
      />
      {type === "password" && Boolean(value) && (
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color={colors.fg.tertiary}
          />
        </Pressable>
      )}

      {type !== "password" && clearInput && Boolean(value) && (
        <Pressable onPress={clearInput}>
          <Icon name="x" size={20} color={colors.fg.tertiary} />
        </Pressable>
      )}
    </FieldWrapper>
  );
};

export default TextInput;
