import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar, View } from "native-base";
import React, { useCallback, useEffect, useState } from "react";

import { BottomNavigator } from "./src/BottomNavigator";
import theme from "./src/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "HKGrotesk-Black": require("./assets/fonts/HKGrotesk-Black.otf"),
    "HKGrotesk-Bold": require("./assets/fonts/HKGrotesk-Bold.otf"),
    "HKGrotesk-ExtraBold": require("./assets/fonts/HKGrotesk-ExtraBold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  async function prepare() {
    try {
      await Font.loadAsync(Ionicons.font);
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (e) {
      console.error(e);
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <View flex={1} onLayout={onLayoutRootView}>
        <StatusBar animated translucent barStyle="dark-content" />
        <NavigationContainer>
          <BottomNavigator />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
