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
      <Path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0M12 9h.01" />
      <Path d="M11 12h1v4h1" />
    </Svg>
  );
}

export default SvgComponent;
