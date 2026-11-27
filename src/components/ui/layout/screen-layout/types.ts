import { ReactNode } from "react";
import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

export type ScreenPaddingSides = "both" | "start" | "end" | "none";

export type ScreenLayoutBaseProps = {
  renderTopBar?: () => ReactNode;
  hasTabBar?: boolean;
  paddingSides?: ScreenPaddingSides;
  children: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export type UseStylesParams = {
  hasTopBar: boolean;
  hasTabBar: boolean;
  paddingSides: ScreenPaddingSides;
};

export type ScreenLayoutConditionalProps =
  | {
      scrollable?: false;
      scrollProps?: never;
    }
  | {
      scrollable?: true;
      scrollProps?: ScrollViewProps;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  ScreenLayoutConditionalProps;
