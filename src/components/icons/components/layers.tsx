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
      <Path d="M12 4L4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4" />
    </Svg>
  );
}

export default SvgComponent;
