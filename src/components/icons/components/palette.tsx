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
      <Path d="M12 21a9 9 0 010-18c4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828-.844.75-1.989 1.172-3.182 1.172H14a2 2 0 00-1 3.75A1.3 1.3 0 0112 21" />
      <Path d="M7.5 10.5a1 1 0 102 0 1 1 0 10-2 0M11.5 7.5a1 1 0 102 0 1 1 0 10-2 0M15.5 10.5a1 1 0 102 0 1 1 0 10-2 0" />
    </Svg>
  );
}

export default SvgComponent;
