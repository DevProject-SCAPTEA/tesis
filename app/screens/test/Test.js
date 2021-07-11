import React, { useRef, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import * as firebase from "firebase";
import Toast from "react-native-easy-toast";
import Quiz from "./Quiz";
import LoginOut from "../account/LoginOut";


export default function Test() {
  const toastRef = useRef();
  const [login, setLogin] = useState(null);
  //const [isVisible, setIsVisible] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  console.log(login);
  return login ? <Quiz /> : <LoginOut />;
}
