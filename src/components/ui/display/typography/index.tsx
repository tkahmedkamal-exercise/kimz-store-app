import { useFontStyles } from "@/hook";
import { TypographyVariant } from "@/types";
import { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = {
  variant: TypographyVariant;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
} & TextProps;

const Typography = ({
  variant = "mediumRegular",
  children,
  style,
  color,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles();

  return (
    <Text style={[typographyStyles[variant], { color }, style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
