import {
  NavigationContainer,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import ProfileDetailsScreen from "../screens/ProfileDetailsScreen";

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />

        <Stack.Screen
          name="Discover"
          component={DiscoverScreen}
        />

        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}