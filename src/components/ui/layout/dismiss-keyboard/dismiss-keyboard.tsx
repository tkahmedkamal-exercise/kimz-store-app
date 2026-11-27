import { Keyboard, Pressable, StyleProp, ViewStyle } from "react-native";

type DismissKeyboardProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const DismissKeyboard = ({ style, children }: DismissKeyboardProps) => {
  return (
    <Pressable onPress={Keyboard.dismiss} accessible={false} style={style}>
      {children}
    </Pressable>
  );
};

export default DismissKeyboard;
