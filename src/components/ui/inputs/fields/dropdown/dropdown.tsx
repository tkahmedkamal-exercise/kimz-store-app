import { Icon } from "@/components/icons";
import { Typography } from "@/components/ui/display";
import { AppBottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { Scroll } from "@/components/ui/overlay/app-bottom-sheet/app-bottom-sheet";
import { useRef, useState } from "react";
import { Keyboard, Pressable } from "react-native";
import FieldWrapper from "../shared/field-wrapper";
import useStyles from "../shared/use-styles";
import { fieldCurrentStatus } from "../shared/utils";
import DropdownList from "./dropdown-list";
import { DropdownProps } from "./types";

const Dropdown = ({
  label,
  placeholder,
  iconName,
  options,
  value,
  errorMessage,
  style,
  onSelect,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);

  const selectedOption = options.find((option) => option.value === value);

  const currentStatus = fieldCurrentStatus(
    selectedOption?.value ?? "",
    open,
    errorMessage,
  );
  const { colors, styles } = useStyles(currentStatus);

  const openSheet = () => {
    Keyboard.dismiss();
    setOpen(true);
    sheetRef.current?.expand();
  };

  const handleSelectOption = (val: string) => {
    sheetRef.current?.close();
    onSelect(val);
    setOpen(false);
  };

  return (
    <Pressable onPress={openSheet} style={styles.pressableWrapper}>
      <FieldWrapper
        label={label}
        fieldIconName={iconName}
        errorMessage={errorMessage}
        currentStatus={currentStatus}
        style={style}
      >
        <Typography
          variant="smallRegular"
          textTransform="capitalize"
          style={styles.dropdownValueText}
          color={selectedOption ? colors.fg.primary : colors.fg.tertiary}
        >
          {selectedOption?.label || placeholder}
        </Typography>
        <Icon
          name={open ? "chevron-up" : "chevron-down"}
          size={22}
          color={colors.fg.tertiary}
        />
      </FieldWrapper>
      <AppBottomSheet
        ref={sheetRef}
        title={label ?? placeholder}
        bottomSheetProps={{
          snapPoints: ["50%"],
          onClose: () => setOpen(false),
        }}
      >
        <Scroll>
          <DropdownList
            options={options}
            value={value}
            onSelect={(val) => handleSelectOption(val)}
            styles={styles.dropdownOption}
          />
        </Scroll>
      </AppBottomSheet>
    </Pressable>
  );
};

export default Dropdown;
