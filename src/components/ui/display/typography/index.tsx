import { useFontStyles } from "@/hook";
import { TypographyVariant } from "@/types";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TextChildren = string | number | TextChildren[];

type TypographyProps = {
  variant: TypographyVariant;
  children: TextChildren;
  style?: StyleProp<TextStyle>;
  color?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
} & Omit<TextProps, "children">;

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
