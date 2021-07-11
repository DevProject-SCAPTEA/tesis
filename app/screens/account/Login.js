import React, { useRef } from "react";
import {
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { useNavigation } from "@react-navigation/native";
import RegisterUser from "./RegisterUser";
import Toast from 'react-native-easy-toast'
import LoginForm from "../../components/Acccount/LoginForm";

const { width, height } = Dimensions.get("window");
export default function Login() {
  const toastRef = useRef();
  return (
    <View style={styles.viewScroll}>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Hola, Bienvenido.</Text>
        <Image
          source={require("../../../assets/img/Login.png")}
          resizeMode="contain"
          style={styles.Logo}
        />
      </View>

      <View style={styles.viewQuiz}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
        <Toast ref={toastRef} position='center' opacity={0.9} />
      </View>
    </View>
  );
}
function CreateAccount() {
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <Text style={styles.textRegister}>
      ¿Áun no tienes una cuenta?{" "}
      <Text
        style={styles.bntText}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  viewScroll: {
    backgroundColor: "#ffff",
    alignContent: "center",
    alignItems: "center",
    height: height,
    width: width,
  },
  viewTitle: {
    backgroundColor: "#ffff",
    position: "absolute",
    width: "90%",
    height: "30%",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    top: "3%",
    left: "15%",
  },
  Logo: {
    top: "3%",
    height: 150,
    width: "100%",
  },
  viewQuiz: {
    backgroundColor: "#ffff",
    alignContent: "center",
    alignItems: "center",
    top: "25%",
    height: "55%",
    width: "90%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#9341b3",
  },
  textRegister: {
    fontWeight: "bold",
    fontSize: 16,
  },
  bntText: {
    color: "#2a9d8f",
    fontStyle: "italic",
  },
});
