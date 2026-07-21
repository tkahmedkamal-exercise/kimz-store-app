import { AvatarPlaceholder } from "@/assets/images";
import { Icon } from "@/components/icons";
import { Image } from "expo-image";
import { View } from "react-native";
import { AvatarProps } from "./types";
import useStyles from "./use-styles";

const Avatar = ({
  size = "md",
  enableUploader,
  imgSrc,
  style,
}: AvatarProps) => {
  const { styles, colors } = useStyles(size);
  return (
    <View style={style}>
      <Image
        style={styles.img}
        source={imgSrc}
        contentFit="cover"
        placeholder={AvatarPlaceholder}
        placeholderContentFit="cover"
        transition={1000}
      />
      {enableUploader && size === "lg" && (
        <View style={styles.uploaderRing}>
          <View style={styles.uploader}>
            <Icon name="camera" size={20} color={colors.fg.contrast} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Avatar;
