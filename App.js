import React, { useEffect } from "react";
import Navigation from "./app/navigations/Navigation";
import { LogBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import * as firebase from "firebase";
import { decode, encode } from 'base-64'

export default function App() {

  if (!global.btoa) { global.btoa = encode }

  if (!global.atob) { global.atob = decode }

  LogBox.ignoreLogs([
    'Setting a timer',
    '[2021-03-31T20:30:24.707Z]',
    'VirtualizedLists',
    'Non-serializable values were found in the navigation state',
    'It appears that you are using old version of react-navigation library',
  ]);

  return <Navigation />;
}
