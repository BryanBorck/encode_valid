import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Login/login";
import HomeScreen from './src/pages/Home/home';
import JournalistScreen from './src/pages/Journalist/journalist';
import ValidatorScreen from './src/pages/Validator/validator';
import VerifierScreen from './src/pages/Verifier/verifier';
import SignupScreen from './src/pages/Signup/signup';

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
              <Stack.Screen name="Signup" options={{ headerShown: false }}>
                  {(props) => (
                      <SignupScreen
                          {...props}
                      />
                  )}
              </Stack.Screen>
              <Stack.Screen name="Home" options={{ headerShown: false }}>
                  {(props) => (
                      <HomeScreen
                          {...props}
                      />
                  )}
              </Stack.Screen>
              <Stack.Screen name="Journalist" options={{ headerShown: false }}>
                  {(props) => (
                      <JournalistScreen
                          {...props}
                      />
                  )}
              </Stack.Screen>
              <Stack.Screen name="Validator" options={{ headerShown: false }}>
                  {(props) => (
                      <ValidatorScreen
                          {...props}
                      />
                  )}
              </Stack.Screen>
              <Stack.Screen name="Verifier" options={{ headerShown: false }}>
                  {(props) => (
                      <VerifierScreen
                          {...props}
                      />
                  )}
              </Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
}