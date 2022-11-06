/** @format */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SignedInStack } from "./navigation";

const App = () => {
  return (
    <NavigationContainer>
      <SignedInStack />
    </NavigationContainer>
  );
};

export default App;
