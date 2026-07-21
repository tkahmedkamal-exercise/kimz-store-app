import { Icon } from "@/components/icons";
import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import RowNavTrailing from "./row-nav-trailing";
import { RowNavProps } from "./types";
import useStyles from "./use-styles";

const RowNav = ({
  variant,
  title,
  icon,
  style,
  onPress,
  ...trailingProps
}: RowNavProps) => {
  const { styles, colors } = useStyles();

  const conditionalColor = {
    default: colors.fg.primary,
    danger: colors.danger.base,
  };

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.mainInfo}>
        <Icon name={icon} size={24} color={conditionalColor[variant]} />
        <Typography variant="smallBold" color={conditionalColor[variant]}>
          {title}
        </Typography>
      </View>
      <RowNavTrailing {...trailingProps} />
    </Pressable>
  );
};

export default RowNav;
