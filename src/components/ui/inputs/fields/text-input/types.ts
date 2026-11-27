import { IconName } from "@/components/icons/types";
import { FieldProps } from "../shared/types";

type TextInputTypeBase = FieldProps & {
  onChangeText: (text: string) => void;
};

type TextInputTypeProps =
  | { type?: "text"; iconName: IconName; clearInput?: () => void }
  | { type: "password"; iconName?: never; clearInput?: never };

export type TextInputProps = TextInputTypeBase & TextInputTypeProps;
