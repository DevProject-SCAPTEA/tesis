import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Icon } from "react-native-elements";
import GradientButton from "react-native-gradient-buttons";
import { isEmpty } from 'lodash';
import { useNavigation } from '@react-navigation/native'
import * as firebase from 'firebase';
import { validateEmail } from "../../utils/validations";
import Loading from "../Loading";

export default function LoginForm(props) {
  const { toastRef } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const navigation = useNavigation();
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  const onSubmit = () => {
    if (isEmpty(formData.email || isEmpty(formData.password))) {
      toastRef.current.show('Todos los campos son obligatorios');
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show('El email no es correcto');
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate('account');
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show('Los datos no son correctos');
        })
    }
  }
  return (
    <View style={styles.containerView}>
      <Text style={styles.textTitle}>Inicio de sesión</Text>
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
      <Loading isVisible={loading} text={'Iniciando sesión'} />
    </View>
  )
}
function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}
const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#ffff",
    alignContent: "center",
    alignItems: "center",
    height: "70%",
    width: "90%",
  },
  textTitle: {
    top: 25,
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
    //backgroundColor: '#646464',
    top: 50,
    alignItems: "center",
    width: '60%'

  },
  icons: {
    color: "#c1c1c1",
  },
});