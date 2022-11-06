/** @format */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllEvents from "./AllEvents";
import EventDetails from "./EventDetails";
const Stack = createNativeStackNavigator();

const Events = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Event Details" component={EventDetails} />
      <Stack.Screen name="All Events" component={AllEvents} />
    </Stack.Navigator>
  );
};

export default Events;
