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
      <Path d="M3 3l18 18M15 8h.01M21 15v3m0 3h-3M3 21V9a2 2 0 012-2h12M5 21h12a2 2 0 002-2V7" />
      <Path d="M5 15l4-4c.928-.893 2.072-.893 3 0l5 5" />
      <Path d="M14 14l1-1c.617-.593 1.328-.793 2.009-.598" />
    </Svg>
  );
}

export default SvgComponent;
