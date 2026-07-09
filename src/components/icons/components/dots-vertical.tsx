import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";

function SvgComponent({ size = 24, color = "black", style }: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M11 12a1 1 0 102 0 1 1 0 10-2 0M11 19a1 1 0 102 0 1 1 0 10-2 0M11 5a1 1 0 102 0 1 1 0 10-2 0" />
    </Svg>
  );
}

export default SvgComponent;
