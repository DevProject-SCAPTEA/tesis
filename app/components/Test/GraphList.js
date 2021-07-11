import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Divider } from 'react-native-elements';
import { firebaseApp } from "../../../app/utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { Alert } from "react-native";

//import moment from "moment";

const db = firebaseApp.firestore(firebaseApp);
export default function GraphList(props) {
  const { test, date } = props;
  //const createDate = moment(date[0]).format("MMM");
  //const { totalTest, createDate } = tests.item;
  // console.log(date);
  //console.log(test);
  //const data1 = test[0];
  //console.log('HOLA ' + test);

  return (
    <View style={styles.containerView}>
      <Text style={styles.textTitle}>Historial de pruebas</Text>
      <Divider
        style={{
          //top: 25,
          borderColor: "#646464",
          borderWidth: 3,
          backgroundColor: "#000000",
          width: "70%",
          borderRadius: 10,
        }}
      />
      <LineChart
        onDataPointClick={({ value, dataset, getColor }) =>
          Alert.alert("valor: " + value)
        }
        data={{
          labels: date,
          datasets: [
            {
              data: test,
            },
          ],
        }}
        width={Dimensions.get("window").width - 15} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#34a0a4",
          //backgroundGradientFrom: "#48cae4",
          backgroundGradientFrom: "#6CC3D4",
          backgroundGradientTo: "#BC54DB",
          //backgroundGradientTo: "#b100e8",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#000000",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: {
    alignContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 5
  }
});
