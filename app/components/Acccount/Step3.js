import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Icon } from "react-native-elements";
export default function Step3(props) {
  const { Data } = props;
  const [formData, setFormData] = useState(defaultFormValue());
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  Data.address = formData.address;
  Data.phone = formData.phone;
  Data.name = formData.name;
  Data.lastName = formData.lastName;
  // console.log(Data);
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}>Registro de usuario</Text>
      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Ingrese su Dirección</Text>
        <Input
          placeholder="Dirección"
          multiline={true}
          // textAlignVertical={"top"}
          containerStyle={styles.inputForm}
          onChange={(e) => onChange(e, "address")}
        />
        <Text style={styles.textInput}>Ingrese su número</Text>
        <Input
          placeholder="Teléfono"
          containerStyle={styles.inputForm2}
          onChange={(e) => onChange(e, "phone")}
        />
        <Text style={styles.textInput}>Ingrese su nombre</Text>
        <Input
          placeholder="Nombre"
          containerStyle={styles.inputForm2}
          onChange={(e) => onChange(e, "name")}
        />
        <Text style={styles.textInput}>Ingrese su Apellido</Text>
        <Input
          placeholder="Apellido"
          containerStyle={styles.inputForm2}
          onChange={(e) => onChange(e, "lastName")}
        />
      </View>
    </View>
  );
}

function defaultFormValue() {
  return {
    address: "",
    phone: "",
    name: "",
    lastName: "",
  };
}

const styles = StyleSheet.create({
  viewContainer: {
    height: 500,
    width: "90%",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewInput: {
    height: "80%",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  inputForm: {
    // marginTop: 5,
    width: "90%",
    height: "12%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6464",
  },
  inputForm2: {
    // marginTop: 5,
    width: "90%",
    height: "12%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6464",
  },
  textInput: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 5,
    right: 10 * 4.8,
  },
});
