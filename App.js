import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./screens/AuthScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile/ProfileScreen";
import Notification from "./screens/Notification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Notification">
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{title: "Auth", headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: "Profile", headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{title: "Notification", headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
