import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

import { firebaseApp } from "../../../app/utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

import ListTest from "../../components/Test/ListTest";

const db = firebaseApp.firestore(firebaseApp);
export default function TestList() {
  const [test, setTest] = useState([]);
  const [total, setTotal] = useState(0);
  //console.log(test);
  useEffect(() => {
    db.collection("tests")
      .get()
      .then((snap) => {
        setTotal(snap.size);
      });

    const resultTests = [];
    const id = firebase.auth().currentUser.uid;
    //console.log(id);
    db.collection("tests")
      .where("createBy", "==", id)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const test = doc.data();
          test.id = doc.id;
          resultTests.push(test);
        });
        setTest(resultTests);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <View style={styles.containerView}>
      <View style={styles.viewImage}>
        <Image
          style={styles.imagen}
          source={require("../../../assets/img/listGraph.png")}
        />
      </View>

      <Text style={styles.textPS}>Puntajes semanales</Text>

      <Divider
        style={{
          top: 10,
          borderColor: "#646464",
          borderWidth: 2,
          backgroundColor: "#000000",
          width: "70%",
        }}
      />

      <View style={styles.listView}>
        <ListTest />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffff",
    alignItems: "center",
    alignContent: "center",
  },
  viewImage: {
    paddingTop: 5,
    //backgroundColor: "#646464",
    alignContent: "center",
    alignItems: "center",
    width: "90%",
    height: "25%",
  },
  imagen: {
    width: "70%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
    resizeMode: "stretch",
    //borderColor: "#6464",
  },
  textPS: {
    fontSize: 15,
    fontWeight: "bold",
  },
  listView: {
    height: "70%",
    paddingTop: "5%",
  },
});
