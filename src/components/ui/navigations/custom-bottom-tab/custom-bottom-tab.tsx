import { View, ViewProps } from "react-native";
import useStyle from "./use-style";

const CustomBottomTab = ({ style, ...rest }: ViewProps) => {
  const { styles } = useStyle();

  return (
    <View style={styles.safeAreaView}>
      <View style={[style, styles.tabBar]} {...rest} />
    </View>
  );
};

export default CustomBottomTab;
