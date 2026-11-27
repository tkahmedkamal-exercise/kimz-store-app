import AppBootstrap from "@/components/wrappers/app-bootstrap";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "SpaceGrotesk-Light": require("@/assets/fonts/SpaceGrotesk-Light.ttf"),
    "SpaceGrotesk-Regular": require("@/assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Bold": require("@/assets/fonts/SpaceGrotesk-Bold.ttf"),
    "Cairo-Light": require("@/assets/fonts/Cairo-Light.ttf"),
    "Cairo-Regular": require("@/assets/fonts/Cairo-Regular.ttf"),
    "Cairo-Bold": require("@/assets/fonts/Cairo-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().catch((error: unknown) => {
        console.warn("Failed to hide the splash screen:", error);
      });
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppBootstrap />;
}
