import { Icon } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { useTheme } from "@/hook";
import { Pressable } from "react-native";
import { DropdownListProps } from "./types";

const DropdownList = ({
  options,
  value,
  styles,
  onSelect,
}: DropdownListProps) => {
  const color = useTheme();

  return (
    <>
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <Pressable
            key={option.value}
            onPress={() => onSelect(option.value)}
            style={styles}
          >
            <Typography
              variant={isSelected ? "normalBold" : "normalRegular"}
              textTransform="capitalize"
              color={isSelected ? color.primary.base : color.fg.primary}
            >
              {option.label}
            </Typography>
            {isSelected && (
              <Icon name="check" size={20} color={color.primary.base} />
            )}
          </Pressable>
        );
      })}
    </>
  );
};

export default DropdownList;
