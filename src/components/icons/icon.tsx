import { useTranslation } from "@/hook";
import iconMapper from "./components/icon-mapper";
import { IconName, IconProps } from "./types";

type IconComponentProps = IconProps & {
  name: IconName;
  reverse?: boolean;
};

const Icon = ({ name, size, color, style, reverse }: IconComponentProps) => {
  const { direction } = useTranslation();

  const Component = iconMapper[name];
  const isRTL = direction === "rtl";
  const transformDir = reverse && isRTL ? -1 : 1;

  if (!Component) {
    return null;
  }

  return (
    <Component
      size={size}
      color={color}
      style={[style, { transform: [{ scaleX: transformDir }] }]}
    />
  );
};

export default Icon;
