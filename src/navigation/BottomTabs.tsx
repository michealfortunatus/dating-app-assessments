import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import DiscoverScreen from "../screens/DiscoverScreen";
import LikesScreen from "../screens/DiscoverScreen";
import ChatsScreen from "../screens/DiscoverScreen";
import ProfileScreen from "../screens/DiscoverScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: styles.tabBar,

        tabBarActiveTintColor: "#FF4D67",
        tabBarInactiveTintColor: "#8F8F8F",

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          switch (route.name) {
            case "Discover":
              iconName = "flame";
              break;

            case "Likes":
              iconName = "heart";
              break;

            case "Chats":
              iconName = "chatbubble";
              break;

            case "Profile":
              iconName = "person";
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
  name="Discover"
  component={DiscoverScreen}
/>

<Tab.Screen
  name="Likes"
  component={LikesScreen}
  listeners={{
    tabPress: (e) => {
      e.preventDefault();
    },
  }}
/>

<Tab.Screen
  name="Chats"
  component={ChatsScreen}
  listeners={{
    tabPress: (e) => {
      e.preventDefault();
    },
  }}
/>

<Tab.Screen
  name="Profile"
  component={ProfileScreen}
  listeners={{
    tabPress: (e) => {
      e.preventDefault();
    },
  }}
/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,

    height: 70,

    backgroundColor: "rgba(20,20,20,0.95)",

    borderRadius: 25,

    borderTopWidth: 0,

    elevation: 10,

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});