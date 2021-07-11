import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";
import Toast from "react-native-easy-toast";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function defaultFormValue() {
  return {
    date: "",
    ethnicity: "",
    gender: "",
    country: "",
    province: "",
    district: "",
    address: "",
    phone: "",
    createBy: "",
    name: "",
    lastName: "",
    email: "",
  };
}

export default function UserExtraData(props) {
  const { setShowModal } = props;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState(defaultFormValue());
  const [userInfo, setUserInfo] = useState("");
  const toastRef = useRef();
  //Data.createBy = firebase.auth().currentUser.uid;

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      Data.createBy = user.uid;
      Data.email = user.email;
      // setUserInfo(user.email);
    })();
  }, []);

  const addUserData = () => {
    setLoading(true);

    db.collection("userData")
      .add({
        date: Data.date,
        ethnicity: Data.ethnicity,
        gender: Data.gender,
        country: Data.country,
        province: Data.province,
        district: Data.district,
        address: Data.address,
        phone: Data.phone,
        createBy: Data.createBy,
        nombre: Data.name,
        apellido: Data.lastName,
        email: Data.email,
      })
      .then(() => {
        // console.log("registrado");
        setLoading(false);
        toastRef.current.show("Datos registrados");
        setShowModal(false);
        // navigation.navigate("account");
      })
      .catch(() => {
        console.log("error");
        setLoading(false);
        // setIsActivate(false);
        toastRef.current.show("Intente nuevamente");
      });
    //console.log('send');
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#ffff" }}>
        <ProgressSteps>
          <ProgressStep label="First Step">
            <View style={styles.viewForm}>
              <Step1 Data={Data} />
            </View>
          </ProgressStep>
          <ProgressStep label="Second Step">
            <View style={styles.viewForm}>
              <Text>Hola</Text>
              <Step2 Data={Data} />
            </View>
          </ProgressStep>
          <ProgressStep label="Third Step" onSubmit={() => addUserData()}>
            <View style={styles.viewForm}>
              <Text>Hola</Text>
              <Step3 Data={Data} />
            </View>
          </ProgressStep>
        </ProgressSteps>
        <Loading isVisible={loading} text={"Registrando"} />
        <Toast ref={toastRef} position="center" opacity={0.9} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewForm: {
    flex: 1,
    marginTop: 10,
    left: 10,
    width: "95%",
    height: 400,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#2a9d8f",
    alignContent: "center",
    alignItems: "center",
  },
});
