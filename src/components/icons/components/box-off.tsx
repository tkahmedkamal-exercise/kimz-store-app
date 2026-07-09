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
      <Path d="M3 10a2 2 0 01.98-1.7l8-4.6a2 2 0 012 0l3 1.72M21 10v8a2 2 0 01-1 1.7l-8 4.6a2 2 0 01-2 0l-7-4M12 12v9" />
      <Path d="M3 3L21 21" />
    </Svg>
  );
}

export default SvgComponent;
