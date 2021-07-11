import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/account/Account";
import Login from "../screens/account/Login";
import RegisterUser from "../screens/account/RegisterUser";
import UserExtraData from "../components/Acccount/UserExtraData";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Mi Cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar sesión" }}
      />
      <Stack.Screen
        name="register"
        component={RegisterUser}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="extraData"
        component={UserExtraData}
        options={{ title: "Datos de usuario" }}
      />
    </Stack.Navigator>
  );
}
