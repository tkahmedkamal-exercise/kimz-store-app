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
      <Path d="M3 8a16 16 0 014.5-2.5M13 4.2a15.6 15.6 0 018 3.7M6 11a10 10 0 013-1.7M14 9.7a10 10 0 014 2.3M9 14a4 4 0 016 0" />
      <Path d="M3 3L21 21" />
      <Path d="M12 18L12.01 18" />
    </Svg>
  );
}

export default SvgComponent;
