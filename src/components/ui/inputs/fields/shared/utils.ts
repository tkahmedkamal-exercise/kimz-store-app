import { StatusType } from "./types";

export const fieldCurrentStatus = (
  value: string,
  isFocused: boolean,
  errorMessage?: string,
): StatusType => {
  if (errorMessage) return "error";
  if (isFocused) return "focused";
  if (value) return "filled";
  return "default";
};
