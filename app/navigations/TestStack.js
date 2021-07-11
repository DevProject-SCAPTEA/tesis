import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Test from "../screens/test/Test";
import Questions from "../screens/test/Questions";
const Stack = createStackNavigator();

export default function TestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="test"
        component={Test}
        options={{ title: "Pruebas" }}
      />
      <Stack.Screen
        name="quiz"
        component={Questions}
        options={{ title: "Test" }}
      />
    </Stack.Navigator>
  );
}
