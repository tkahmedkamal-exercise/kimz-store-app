import { IconName } from "@/components/icons/types";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type StatusType = "default" | "error" | "focused" | "filled";

export type FieldWrapperProps = {
  label?: string;
  fieldIconName: IconName;
  children: ReactNode;
  errorMessage?: string;
  currentStatus: StatusType;
  style?: StyleProp<ViewStyle>;
};

export type FieldProps = {
  label?: string;
  placeholder: string;
  errorMessage?: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

export type FieldLabelProps = {
  label?: string;
};

export type FieldErrorMessageProps = {
  errorMessage?: string;
};

// type FormInputTypePros =
//   | { type?: "text"; iconName: IconName; clearInput?: () => void }
//   | { type: "password"; iconName?: never; clearInput?: never };

// export type FormInputProps = FieldWrapperProps & FormInputTypePros;
