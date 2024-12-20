// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";

//navigations settings
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//All page screens
import HomeScreen from "./pages/HomeScreen";
import PrepareOrderScreen from "./pages/PrepareOrderScreen";
import RestaurantScreen from "./pages/RestaurantScreen";
import AllRestaurants from "./pages/AllRestaurants";
import BasketScreen from "./pages/BasketScreen";

//state manangement
import { Provider } from "react-redux";
import { store } from "./store";

import { NativeWindStyleSheet } from "nativewind";
import LocationScreen from "./pages/LocationScreen";

NativeWindStyleSheet.setOutput({
  default: "native",
});
// App.jsx

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{}} name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{ headerShown: false, presentation: "card" }}
        name="Restaurant"
        component={RestaurantScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, presentation: "card" }}
        name="AllRestaurants"
        component={AllRestaurants}
      />
      <Stack.Screen
        options={{ headerShown: false, presentation: "modal" }}
        name="BasketScreen"
        component={BasketScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, presentation: "modal" }}
        name="PrepareOrderScreen"
        component={PrepareOrderScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, presentation: "modal" }}
        name="LocationScreen"
        component={LocationScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
