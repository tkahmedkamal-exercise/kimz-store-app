import { View } from "react-native";

import { Icon } from "@/components/icons";
import Typography from "../typography";
import { StatusBillProps } from "./types";
import useStyles from "./use-styles";

const StatusBill = ({
  iconName,
  variant = "filled",
  label,
  color,
  style,
}: StatusBillProps) => {
  const { styles, strongColor } = useStyles(color, variant);
  return (
    <View style={[styles.container, style]}>
      {iconName && <Icon name={iconName} size={13} color={strongColor} />}
      <Typography
        variant="xsmallBold"
        color={strongColor}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </View>
  );
};

export default StatusBill;
