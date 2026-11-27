import { useFontStyles } from "@/hook";
import { Language, TypographyVariant } from "@/types";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TextChildren = string | number | TextChildren[];

type TypographyProps = {
  variant: TypographyVariant;
  children: TextChildren;
  style?: StyleProp<TextStyle>;
  color?: string;
  forceLanguage?: Language;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
} & Omit<TextProps, "children">;

const Typography = ({
  variant = "mediumRegular",
  children,
  style,
  color,
  textTransform,
  forceLanguage,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles(forceLanguage);

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
