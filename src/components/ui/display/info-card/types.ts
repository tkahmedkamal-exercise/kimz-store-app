import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type InfoCardProps = {
  isSelected?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: () => void;
};

export type InfoCardLeadingProps = {
  title: string;
  description: string;
};

export type InfoCardTrailingProps = {
  children: React.ReactNode;
};
