import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { Text } from "react-native";

const HomePage = () => {
  return (
    <ScreenLayout hasTabBar renderTopBar={() => <TopBar title="Home" />}>
      <Text>Home</Text>
    </ScreenLayout>
  );
};

export default HomePage;
