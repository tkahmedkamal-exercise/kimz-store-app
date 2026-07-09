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
      <Path d="M3 9l9 6 9-6-9-6-9 6" />
      <Path d="M21 9v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9M3 19l6-6M15 13l6 6" />
    </Svg>
  );
}

export default SvgComponent;
