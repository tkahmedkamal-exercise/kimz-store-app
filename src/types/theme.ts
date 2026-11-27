import colors from "@/store/theme/colors.json";

export type Theme = "dark" | "light" | "system";
export type ThemeColors = typeof colors;
export type StatusVariant = "success" | "warning" | "danger" | "info";
