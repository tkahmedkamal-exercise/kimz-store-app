import Svg, { Circle, Path } from "react-native-svg";
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
      <Path d="M3 8V5a2 2 0 012-2h3M16 3h3a2 2 0 012 2v3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3" />
      <Circle cx={12} cy={12} r={5} />
      <Circle cx={12} cy={12} r={2.5} />
    </Svg>
  );
}

export default SvgComponent;
