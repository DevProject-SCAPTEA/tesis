import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import GraphList from "../../components/Test/GraphList";
import GraphBody from "../../components/Test/GraphBody";

import "firebase/firestore";
//import moment from "moment";
//const db = firebaseApp.firestore(firebaseApp);
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function GraphData({ route, navigation }) {
  const { data, date, userInfo } = route.params;
  //const date = createDate.toDate();
  //console.log(data);

  return (
    <View style={styles.viewContainer}>
      <GraphBody userInfo={userInfo} test={data} />
      <GraphList test={data} date={date} />
      <Image source={{uri: 'item.imagenes[0].imagen1'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    width: width,
    height: height,
    backgroundColor: '#ffff'
  }
});
