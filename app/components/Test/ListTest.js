import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import moment from "moment";

import { size } from "lodash";

export default function ListTest(props) {
  const { test } = props;
  return (
    <View>
      {size(test) > 0 ? (
        <FlatList data={test} renderItem={(tests) => <Test tests={tests} />} />
      ) : (
        <View style={styles.loaderTest}>
          <ActivityIndicator color="#2a9d8f" size="large" />
          <Text>Cargando pruebas</Text>
        </View>
      )}
    </View>
  );
}
function Test(props) {
  const { tests } = props;
  const { totalTest, createBy, createDate, answer, name } = tests.item;
  const date = createDate.toDate();
  //console.log(date);
  return (
    <TouchableOpacity>
      <View style={styles.viewTest}>
        <View style={styles.valueView}>
          <Text style={styles.textValue}>{totalTest}</Text>
        </View>
        <View style={styles.viewAnswer}>
          <Text style={styles.textCreateBy}>{name}</Text>
          <Text style={styles.textCreateBy}>{answer}</Text>
          <Text style={styles.textCreateBy}>
            {moment(date).format("YYYY-MM-DD, h:mm:ss a")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  loaderTes: {
    margin: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  viewTest: {
    flexDirection: "row",
    width: "90%",
    height: "auto",
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#2a9d8f",
  },
  valueView: {
    backgroundColor: "#6464",
    alignContent: "center",
    alignItems: "center",
    height: "auto",
    width: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  textValue: {
    paddingTop: 15,
    fontSize: 45,
  },
  viewAnswer: {
    width: "70%",
    paddingTop: 1,
  },
  textCreateBy: {
    paddingTop: 2,
    fontWeight: "bold",
  },
});
