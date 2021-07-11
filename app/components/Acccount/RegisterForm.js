import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Icon } from "react-native-elements";
import GradientButton from "react-native-gradient-buttons";
import Loading from "../Loading";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRepeatVisible, setIsRepeatVisible] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const navigation = useNavigation();
  const onSubmit = () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Las contraseñas tienen que ser iguales");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "La contraseña tiene que tener al menos 6 caracteres"
      );
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          setLoading(false);
          navigation.navigate("account");
        })
        .catch((err) => {
          setLoading(false);
          toastRef.current.show("El email ya esta en uso, prueba uno nuevo.");
        });
    }
  };
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewInput}>
        <Text style={styles.textTitle}>Registro de usuario</Text>
        <Input
          placeholder="Correo electronico"
          containerStyle={styles.inputForm}
          onChange={(e) => onChange(e, "email")}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.icons}
            />
          }
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.inputForm}
          password={true}
          secureTextEntry={isVisible ? false : true}
          onChange={(e) => onChange(e, "password")}
          rightIcon={
            <Icon
              type="material-community"
              name={isVisible ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icons}
              onPress={() => setIsVisible(!isVisible)}
            />
          }
        />
        <Input
          placeholder="Repetir contraseña"
          containerStyle={styles.inputForm}
          password={true}
          secureTextEntry={isRepeatVisible ? false : true}
          onChange={(e) => onChange(e, "repeatPassword")}
          rightIcon={
            <Icon
              type="material-community"
              name={isRepeatVisible ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icons}
              onPress={() => setIsRepeatVisible(!isRepeatVisible)}
            />
          }
        />
        <View style={styles.viewContainerbtn}>
          <GradientButton
            text="Registrar"
            style={{ marginVertical: 8 }}
            textStyle={{ fontSize: 20 }}
            gradientBegin="#2a9d8f"
            gradientEnd="#9341b3"
            gradientDirection="diagonal"
            height={50}
            width={"100%"}
            radius={18}
            impact
            impactStyle="Light"
            onPressAction={() => onSubmit()}
          ></GradientButton>
        </View>
        <Loading isVisible={loading} text={"CREANDO CUENTA"} />
      </View>
    </View>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#ffff",
    alignContent: "center",
    alignItems: "center",
    top: 25,
    height: "90%",
    width: "90%",
  },
  viewInput: {
    height: "60%",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputForm: {
    top: 30,
    marginTop: 10,
    width: 280,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2a9d8f",
  },
  viewContainerbtn: {
    top: 50,
    alignItems: "center",
  },
  icons: {
    color: "#c1c1c1",
  },
});
