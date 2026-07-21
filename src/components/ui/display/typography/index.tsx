import { useFontStyles } from "@/hook";
import { TypographyVariant } from "@/types";
import { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = {
  variant: TypographyVariant;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
} & TextProps;

const Typography = ({
  variant = "mediumRegular",
  children,
  style,
  color,
  textTransform,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles();

  return (
    <Text
      style={[typographyStyles[variant], { color, textTransform }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
