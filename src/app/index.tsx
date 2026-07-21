import { Icon } from "@/components/icons";
import {
  AddressCard,
  Avatar,
  IconBadge,
  InfoCard,
  StatusBill,
  Typography,
  UserGreeting,
} from "@/components/ui/display";
import {
  Button,
  Checkbox,
  FormInput,
  Radio,
  Switch,
} from "@/components/ui/inputs";
import { RowNav, TopBar } from "@/components/ui/navigations";
import { AppBottomSheet, BottomSheetRef, Modal } from "@/components/ui/overlay";
import { useTheme, useTranslation, useUserPreferences } from "@/hook";
import { useRef, useState } from "react";
import {
  Button as NativeButton,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const initOptions = {
  option1: false,
  option2: false,
  option3: false,
};

export const Index = () => {
  const { setTheme, setLanguage } = useUserPreferences();
  const theme = useTheme();
  const { direction, t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState(initOptions);
  const [isCheck, setIsCheck] = useState(false);
  const [username, setUsername] = useState("");
  const [openModal, setOpenMOdal] = useState(false);
  const BottomSheetREF = useRef<BottomSheetRef>(null);

  console.log(direction);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AddressCard type="office" city="Cairo" address="Cairo, Egypt" />
      <InfoCard>
        <InfoCard.Leading
          title="Los Angeles"
          description="Los Angeles, United States"
        />
        <InfoCard.Trailing>
          <IconBadge iconName="bell" color="success" />
          <StatusBill color="success" label="Home" iconName="home" />
        </InfoCard.Trailing>
      </InfoCard>
      <UserGreeting userName="Jonathan Smith" meta="jonathan@kimzshop.com" />
      <Avatar size="lg" enableUploader />
      <Modal
        visible={openModal}
        title="Modal Title"
        description="Optional secondary description below the title"
        closeModal={() => setOpenMOdal(false)}
        renderItem={() => (
          <>
            <Button title="Confirm" size="sm" onPress={() => {}} />
            <Button
              variant="danger"
              size="sm"
              title="Cancel"
              onPress={() => {}}
            />
          </>
        )}
      />
      <TopBar
        title="Edit Profile"
        actionBtn={{
          iconName: "dots-vertical",
          onPress: () => {},
          flipOnRTL: false,
        }}
        goBack
        forceBack="/"
      />
      <RowNav
        title="Language"
        icon="world"
        onPress={() => {}}
        trailing="chevronWithValue"
        trailingValue="English"
        style={undefined}
        variant="default"
      />
      <FormInput
        label="Username"
        type="text"
        placeholder="Enter username"
        iconName="user"
        value={username}
        onChangeText={(text) => setUsername(text)}
        clearInput={() => setUsername("")}
      />
      <Checkbox
        isSelected={isCheck}
        onChange={() => setIsCheck((prev) => !prev)}
      />
      <View style={styles.rowContainer}>
        <Radio
          isActive={options.option1}
          onChange={() =>
            setOptions((prev) => ({
              ...initOptions,
              option1: !prev.option1,
            }))
          }
        />
        <Radio
          isActive={options.option2}
          onChange={() =>
            setOptions((prev) => ({
              ...initOptions,
              option2: !prev.option2,
            }))
          }
        />
        <Radio
          isActive={options.option3}
          onChange={() =>
            setOptions((prev) => ({
              ...initOptions,
              option3: !prev.option3,
            }))
          }
        />
      </View>
      <Switch
        isActive={isActive}
        onChange={() => setIsActive((prev) => !prev)}
      />
      <Button title="Back" icon="chevron-left" onPress={() => {}} />
      <Icon name="arrow-left" size={50} color={theme.primary.base} reverse />
      <Typography variant="heroBold" color={theme.background.overlay}>
        {t("welcome", { name: "ahmed", age: 25 })}
      </Typography>
      <View style={styles.rowContainer}>
        <NativeButton title="Dark Mode" onPress={() => setTheme("dark")} />
        <NativeButton title="Light Mode" onPress={() => setTheme("light")} />
        <NativeButton title="English" onPress={() => setLanguage("en")} />
        <NativeButton title="Arabic" onPress={() => setLanguage("ar")} />
        <NativeButton title="Open Modal" onPress={() => setOpenMOdal(true)} />
        <NativeButton
          title="Open Bottom Sheet"
          onPress={() => BottomSheetREF.current?.expand()}
        />
      </View>

      <AppBottomSheet
        ref={BottomSheetREF}
        title="hello word"
        description="Default description"
        bottomSheetProps={{
          snapPoints: ["10%", "40%", "60%"],
          index: -1,
          children: (
            <View>
              <Text>Content here!</Text>
            </View>
          ),
        }}
      />
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 12,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
});
