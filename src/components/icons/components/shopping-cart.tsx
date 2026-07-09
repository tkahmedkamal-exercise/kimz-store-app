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
      <Path d="M6.331 8H17.67a2 2 0 011.977 2.304l-1.255 8.152A3 3 0 0115.426 21H8.574a3 3 0 01-2.965-2.544l-1.255-8.152A2 2 0 016.331 8z" />
      <Path d="M9 11V6a3 3 0 016 0v5" />
    </Svg>
  );
}

export default SvgComponent;
