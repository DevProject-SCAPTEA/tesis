import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Input, Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import SelectBox from "react-native-multi-selectbox";
import { size, xorBy } from "lodash";

import SelectInput from "react-native-select-input-ios";
import moment from "moment";

const etnias = [
  { item: "Indigena", id: 1 },
  { item: "Caucasico", id: 2 },
  { item: "Mestizo", id: 3 },
  { item: "Negro", id: 4 },
  { item: "Mulato", id: 5 },
  { item: "Zambo", id: 6 },
  { item: "Asiático", id: 7 },
];
const generos = [
  { item: "Mujer", id: 1 },
  { item: "Hombre", id: 2 },
];

export default function Step1(props) {
  const { Data } = props;
  // console.log(Data);
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeam2, setSelectedTeam2] = useState({});
  Data.ethnicity = selectedTeam.item;
  Data.gender = selectedTeam2.item;
  // console.log(Data);
  // moment.updateLocale("es", {
  //   months:
  //     "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
  //       "_"
  //     ),
  //   monthsShort:
  //     "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),
  //   weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  //   weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  //   weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
  // });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateUser, setDateUser] = useState("");

  const setDate = (date) => {
    Data.date = moment(date).format("MM-DD-YYYY");
    setDateUser(Data.date);
    setShowDatePicker(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "90%",
        // backgroundColor: "#6464",
      }}
    >
      <Text style={styles.textTitle}>Datos del usuario</Text>
      <Text style={styles.textInput}>Fecha de nacimiento</Text>
      <Input
        placeholder="dd/mm/aaaa"
        containerStyle={styles.input}
        value={dateUser}
      />
      <View
        style={{
          position: "absolute",
          width: "15%",
          height: "15%",
          left: "82%",
          top: 70,
        }}
      >
        <Icon
          name="calendar-month"
          type="material-community"
          color="#808080"
          size={40}
          onPress={() => setShowDatePicker(true)}
        />
      </View>

      <Text style={styles.textInput}>Etnia</Text>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SelectBox
          label="Select single"
          options={etnias}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={true}
          width={"100%"}
        />
      </View>

      <Text style={styles.textInput}>Género</Text>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SelectBox
          label="Select single"
          options={generos}
          value={selectedTeam2}
          onChange={onChange2()}
          hideInputFilter={true}
          width={"100%"}
        />
      </View>

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={setDate}
        onCancel={() => {
          // console.log("c");
          setShowDatePicker(false);
        }}
      />
    </SafeAreaView>
  );

  function onChange() {
    return (val) => setSelectedTeam(val);
  }
  function onChange2() {
    return (val) => setSelectedTeam2(val);
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    width: "90%",
  },
  textTitle: {
    paddingTop: 10,
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
    paddingTop: 5,
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
    width: 200,
    height: 50,
  },
});
