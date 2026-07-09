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
      <Path d="M19.5 13.572L12 21l-7.5-7.428A5 5 0 1112 7.006a5 5 0 117.5 6.572" />
    </Svg>
  );
}

export default SvgComponent;
