import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

import InfoBody from "../../components/Info/InfoBody";
import DonutChart from "../../components/Test/DonutChart";
import TravelList from "../../components/Info/TravelList";

const db = firebaseApp.firestore(firebaseApp);

export default function Info({ navigation }) {
  // const [test, setTest] = useState([]);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       var uid = user.uid;
  //       //console.log(uid);
  //       // ...
  //       db.collection("tests")
  //         .where("createBy", "==", uid)
  //         //.orderBy('createDate', 'asc')
  //         .onSnapshot((docs) => {
  //           let users = [];
  //           docs.forEach((doc) => {
  //             const testData = doc.data();
  //             testData.id = doc.id;
  //             users.push(testData);
  //           });
  //           setTest(users);
  //           //setIsVisible(false);
  //           // console.log('user data:', users);
  //         });
  //     } else {
  //       console.log("usuario fuera de sesión");
  //     }
  //   });
  // }, []);
  return (
    <View style={styles.viewContainer}>
      {/* <Text>Info</Text> */}
      {/* {test.map((user, index) => (
        <View key={index}>
          <Text>{user.totalTest}</Text>
        </View>
      ))}
      <Text>Donut Chart</Text> */}
      {/* <View style={styles.viewDonut}>
        <DonutChart />
      </View> */}
      <InfoBody />
      <TravelList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: '#ffff'
  },
  viewDonut: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
    //backgroundColor: '#646464',
    height: "50%",
    width: "50%",
    alignContent: "center",
  },
});
