import Ionicon from "@expo/vector-icons/Ionicons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { Home } from "./pages/Home";
import { Market } from "./pages/Market";
import { UserProfile } from "./pages/UserProfile";

const BoottomTabNavigatior = createBottomTabNavigator();
const screenOptions: BottomTabNavigationOptions = {
  headerShadowVisible: false,
  tabBarHideOnKeyboard: true,
  title: "",
  tabBarShowLabel: false,
};
const sceneContainerStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 12,
  backgroundColor: "white",
};

export function BottomNavigator() {
  return (
    <BoottomTabNavigatior.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={sceneContainerStyle}>
      <BoottomTabNavigatior.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              color={focused ? "blue.500" : "black"}
              size="xl"
              as={<Ionicon name="home-outline" />}
            />
          ),
        }}
        name="home"
        component={Home}
      />
      <BoottomTabNavigatior.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              color={focused ? "blue.500" : "black"}
              size="xl"
              as={<Ionicon name="cart-outline" />}
            />
          ),
        }}
        name="market"
        component={Market}
      />
      <BoottomTabNavigatior.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              color={focused ? "blue.500" : "black"}
              size="xl"
              as={<Ionicon name="person-outline" />}
            />
          ),
        }}
        name="user-profile"
        component={UserProfile}
      />
    </BoottomTabNavigatior.Navigator>
  );
}
