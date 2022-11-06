/** @format */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SignedInStack } from "./navigation";
import * as NavigationBar from "expo-navigation-bar";

const App = () => {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");

  return (
    <NavigationContainer>
      <SignedInStack />
    </NavigationContainer>
  );
};

export default App;
