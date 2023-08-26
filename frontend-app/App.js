import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login/login";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                  {(props) => (
                      <LoginScreen
                          {...props}
                      />
                  )}
              </Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
}