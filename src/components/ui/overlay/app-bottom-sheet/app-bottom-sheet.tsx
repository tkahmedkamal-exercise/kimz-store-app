import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlashList,
  BottomSheetProps,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { ComponentProps, ReactNode, Ref } from "react";
import { View } from "react-native";
import { Typography } from "../../display";
import useStyles from "./use-styles";

type AppBottomSheetProps = {
  title: string;
  description?: string;
  bottomSheetProps?: Omit<BottomSheetProps, "children" | "enableDynamicSizing">;
  children?: ReactNode;
  ref: Ref<BottomSheet>;
};

export type BottomSheetRef = BottomSheet | null;

const AppBottomSheet = ({
  title,
  description,
  bottomSheetProps,
  children,
  ref,
}: AppBottomSheetProps) => {
  const { styles } = useStyles();

  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      opacity={1}
      {...props}
      style={styles.backDrop}
    />
  );

  return (
    <Portal>
      <BottomSheet
        ref={ref}
        snapPoints={
          bottomSheetProps?.snapPoints ?? ["20%", "50%", "70%", "90%"]
        }
        index={bottomSheetProps?.index ?? -1}
        enableDynamicSizing={false}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheet}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        {...bottomSheetProps}
      >
        <View style={styles.container}>
          <Typography variant="mediumBold" style={styles.title}>
            {title}
          </Typography>
          {description && (
            <Typography variant="smallRegular" style={styles.description}>
              {description}
            </Typography>
          )}
          {children}
        </View>
      </BottomSheet>
    </Portal>
  );
};

const Content = ({ style, children, ...rest }: ComponentProps<typeof View>) => {
  const { styles } = useStyles();

  return (
    <View style={[styles.content, style]} {...rest}>
      {children}
    </View>
  );
};

const Scroll = ({
  style,
  children,
  ...rest
}: ComponentProps<typeof BottomSheetScrollView>) => {
  const { styles } = useStyles();

  return (
    <BottomSheetScrollView style={[styles.content, style]} {...rest}>
      {children}
    </BottomSheetScrollView>
  );
};

const List = ({
  style,
  ...rest
}: ComponentProps<typeof BottomSheetFlashList>) => {
  const { styles } = useStyles();

  return <BottomSheetFlashList style={[styles.content, style]} {...rest} />;
};

export { Content, List, Scroll };

export default AppBottomSheet;
