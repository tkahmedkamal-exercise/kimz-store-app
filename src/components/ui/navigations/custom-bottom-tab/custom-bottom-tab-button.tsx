import { Icon } from "@/components/icons";
import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import { CustomBottomTabButtonProps } from "./types";
import useStyle from "./use-style";

const MAX_BADGE_COUNT = 9;

const CustomBottomTabButton = ({
  label,
  iconName,
  badge = 0,
  isFocused,
  ref,
  style,
  ...rest
}: CustomBottomTabButtonProps) => {
  const { colors, styles, focusedColor } = useStyle(isFocused);

  const badgeLabel = badge ? `${badge}, ${label}` : label;
  const displayBadge = badge > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : badge;

  return (
    <Pressable
      ref={ref}
      {...rest}
      role="tab"
      aria-selected={isFocused}
      accessibilityLabel={badgeLabel}
      style={[styles.tabButton, style]}
    >
      <View style={styles.tabItem}>
        <View style={styles.iconWrapper}>
          <Icon name={iconName} size={25} color={focusedColor} />
          {!!badge && (
            <View style={styles.badge}>
              <Typography variant="xsmallBold" color={colors.fg.contrast}>
                {displayBadge}
              </Typography>
            </View>
          )}
        </View>
        <Typography
          variant="xsmallBold"
          color={focusedColor}
          textTransform="capitalize"
        >
          {label}
        </Typography>
      </View>
    </Pressable>
  );
};

export default CustomBottomTabButton;
