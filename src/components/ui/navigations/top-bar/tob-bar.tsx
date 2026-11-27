import { Icon } from "@/components/icons";
import { IconName } from "@/components/icons/types";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { Typography } from "../../display";
import useStyles from "./use-styles";

type TopBarBaseProps = {
  title: string;
  actionBtn?: { iconName: IconName; onPress: () => void; flipOnRTL: boolean };
  style?: StyleProp<ViewStyle>;
};

type TopBarBackProps =
  | { goBack?: false; forceBack?: never }
  | { goBack: true; forceBack?: Href };

type TopBarProps = TopBarBaseProps & TopBarBackProps;

const TopBar = ({ title, goBack, forceBack, actionBtn }: TopBarProps) => {
  const router = useRouter();
  const { styles, colors } = useStyles();

  const handleGoBack = () => {
    if (forceBack) {
      router.push(forceBack);
      return;
    }

    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      {goBack ? (
        <Pressable onPress={handleGoBack}>
          <Icon
            name="chevron-left"
            size={22}
            color={colors.fg.primary}
            reverse
          />
        </Pressable>
      ) : (
        <View />
      )}

      <Typography
        variant="mediumBold"
        color={colors.fg.primary}
        textTransform="capitalize"
      >
        {title}
      </Typography>
      {actionBtn ? (
        <Pressable onPress={actionBtn.onPress}>
          <Icon
            name={actionBtn.iconName}
            size={22}
            color={colors.fg.primary}
            reverse={actionBtn?.flipOnRTL}
          />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
};

export default TopBar;
