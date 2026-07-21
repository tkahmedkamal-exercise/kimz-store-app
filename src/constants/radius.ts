import { scalingMethods } from "@/utils";

const { HS } = scalingMethods;

const radius = {
  xs: HS(4),
  sm: HS(8),
  md: HS(12),
  input: HS(15),
  lg: HS(16),
  xl: HS(24),
  "2xl": HS(30),
  sheet: HS(28),
  full: 9999,
} as const;

export default radius;
