import {
  CustomBottomTab,
  CustomBottomTabButton,
} from "@/components/ui/navigations";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

const TabsLayout = () => {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTab>
          <TabTrigger name="index" href="/" asChild>
            <CustomBottomTabButton label="Home" iconName="home" />
          </TabTrigger>
          <TabTrigger name="my-order" href="/my-order" asChild>
            <CustomBottomTabButton label="My Order" iconName="truck" />
          </TabTrigger>
          <TabTrigger name="my-cart" href="/my-cart" asChild>
            <CustomBottomTabButton
              label="My Cart"
              iconName="shopping-cart"
              badge={5}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTabButton label="Account" iconName="user" />
          </TabTrigger>
        </CustomBottomTab>
      </TabList>
    </Tabs>
  );
};

export default TabsLayout;
