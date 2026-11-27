import { ReactNode } from "react";
import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

export type ScreenPaddingSides = "both" | "start" | "end" | "none";

export type ScreenLayoutBaseProps = {
  renderTopBar?: () => ReactNode;
  hasTabBar?: boolean;
  paddingSides?: ScreenPaddingSides;
  children: ReactNode;
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
      dismissKeyboardOnTap?: boolean;
      contentContainerStyle?: StyleProp<ViewStyle>;
    }
  | {
      scrollable?: true;
      scrollProps?: ScrollViewProps;
      dismissKeyboardOnTap?: never;
      contentContainerStyle?: never;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  ScreenLayoutConditionalProps;
