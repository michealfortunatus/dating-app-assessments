import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import ProfileDetailsScreen from "../screens/ProfileDetailsScreen";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />

        {/* Tabs appear AFTER welcome */}
        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
        />

       

        {/* 🚀 Full screen modal */}
        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetailsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}