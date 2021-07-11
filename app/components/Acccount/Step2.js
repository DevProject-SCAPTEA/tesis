import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Input, Icon } from "react-native-elements";
import SelectBox from "react-native-multi-selectbox";
import { size, xorBy } from "lodash";
export default function Step2(props) {
  const { Data } = props;
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeam2, setSelectedTeam2] = useState({});
  const [selectedTeam3, setSelectedTeam3] = useState({});
  Data.country = selectedTeam.item;
  Data.province = selectedTeam2.item;
  Data.district = selectedTeam3.item;
  // console.log(Data);
  const paises = [{ item: "Panamá", id: 1 }];

  const provincias = [
    { item: "Bocas del toro", id: 1 },
    { item: "Coclé", id: 2 },
    { item: "Colón", id: 3 },
    { item: "Chiriquí", id: 4 },
    { item: "Darién", id: 5 },
    { item: "Herrera", id: 6 },
    { item: "Los Santos", id: 7 },
    { item: "Panamá", id: 8 },
    { item: "Veraguas", id: 9 },
    { item: "Guna Yala", id: 10 },
    { item: "Emberá Wounaan", id: 11 },
    { item: "Ngäbe-Buglé", id: 12 },
    { item: "Panamá Oeste", id: 13 },
    { item: "Madugandí", id: 14 },
    { item: "Wargandí", id: 15 },
  ];

  const distritos = [
    { item: "La concepción", id: 1 },
    { item: "sortova", id: 2 },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "90%",
        // backgroundColor: "#6464",
      }}
    >
      <Text style={styles.textTitle}>Datos del usuario</Text>

      <Text style={styles.textInput}>País</Text>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SelectBox
          label="Select single"
          options={paises}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={true}
          width={"100%"}
        />
      </View>

      <Text style={styles.textInput}>Provincia</Text>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SelectBox
          label="Select single"
          options={provincias}
          value={selectedTeam2}
          onChange={onChange2()}
          hideInputFilter={true}
          width={"100%"}
        />
      </View>

      <Text style={styles.textInput}>Distrito</Text>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SelectBox
          label="Select single"
          options={distritos}
          value={selectedTeam3}
          onChange={onChange3()}
          hideInputFilter={false}
          width={"100%"}
        />
      </View>
    </SafeAreaView>
  );
  function onChange() {
    return (val) => setSelectedTeam(val);
  }
  function onChange2() {
    return (val) => setSelectedTeam2(val);
  }
  function onChange3() {
    return (val) => setSelectedTeam3(val);
  }
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
    top: 25,
    alignContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  inputStyle: {
    width: 250,
    marginBottom: 15,
    borderColor: "#6464",
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    marginBottom: 15,
    borderColor: "#6464",
    borderWidth: 1,
    borderRadius: 5,
    width: 210,
    height: 50,
  },
});
