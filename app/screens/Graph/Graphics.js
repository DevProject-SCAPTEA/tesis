import React, { useRef, useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { Divider, Icon } from "react-native-elements";
import Toast from "react-native-easy-toast";
import { useNavigation } from "@react-navigation/native";
import GradientButton from "react-native-gradient-buttons";
//import * as firebase from "firebase";
import { firebaseApp } from "../../../app/utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import LoginOut from "../account/LoginOut";
import UserData from "../../components/Acccount/UserData";
import GraphData from "../Graph/GraphData";
import Loading from "../../components/Loading";
//import UserData from '../../components/Acccount/UserData'
const db = firebaseApp.firestore(firebaseApp);

import moment from "moment";

export default function Graphics() {
  const navigation = useNavigation();
  const [login, setLogin] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [test, setTest] = useState([]);
  const [createDates, setCreateDates] = useState([]);
  //console.log(test);
  const [total, setTotal] = useState(0);
  const [isVisible, setIsVisible] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [loadingText, setLoadingText] = useState("");
  // const toastRef = useRef();
  //  console.log(total);

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
      if (user) {
        var uid = user.uid;
        //console.log(uid);
        // ...
        db.collection('tests')
          .orderBy('createDate', 'asc')
          .where("createBy", "==", uid)
          .onSnapshot(docs => {
            let users = [];
            let date = [];
            docs.forEach(doc => {
              const testData = doc.data();
              testData.id = doc.id;
              users.push(testData.totalTest)
              date.push(moment(testData.createDate.toDate()).format("MMM"))
            })
            setTest(users);
            setCreateDates(date);
            //setIsVisible(false);
            //console.log('user data:', users);
          })
      } else {
        // User is signed out
        // ...
      }
    });

    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user);
    })();


  }, []);

  return login ? <View style={styles.containerView}>
    <View style={styles.viewImg}>
      <Image
        rotation={-2}
        style={styles.imagenCircle}
        source={require("../../../assets/img/Img1.png")}
      />
    </View>
    {/* <View style={styles.userInfoView}>
    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Paciente...</Text>
    {userInfo && <UserData userInfo={userInfo} />}
  </View> */}
    <View style={styles.optionsView}>
      <Text style={styles.textPS}>Análasis y Gráficos</Text>
      <Divider
        style={{
          top: 25,
          borderColor: "#646464",
          borderWidth: 3,
          backgroundColor: "#000000",
          width: "70%",
          borderRadius: 10,
        }}
      />
      <Text style={styles.textDescrip}>
        En esta sección prodras ver el análisis estadistico de los datos
        recolectados en tus pruebas de Estado de Ánimo realizadas por el
        paciente.
      </Text>
      <View style={styles.btnView}>
        <GradientButton
          text="Historial de pruebas"
          style={{ marginVertical: 8 }}
          textStyle={{ fontSize: 20 }}
          gradientBegin="#2a9d8f"
          gradientEnd="#9341b3"
          gradientDirection="diagonal"
          height={35}
          width={"60%"}
          radius={18}
          impact
          impactStyle="Light"
          onPressAction={() => navigation.navigate("testlist")}
        ></GradientButton>
        <GradientButton
          text="Gráficos"
          style={{ marginVertical: 8 }}
          textStyle={{ fontSize: 20 }}
          gradientBegin="#2a9d8f"
          gradientEnd="#9341b3"
          gradientDirection="diagonal"
          height={35}
          width={"60%"}
          radius={18}
          impact
          impactStyle="Light"
          onPressAction={() =>
            navigation.navigate("graphlist", { data: test, date: createDates, userInfo: userInfo })
          }
        ></GradientButton>
        <View style={styles.graphImageView}>
          <Image
            style={styles.graphImage}
            source={require("../../../assets/img/Graph.png")}
          />
        </View>
      </View>
    </View>
    <Loading isVisible={isVisible} text={"Cargando..."} />
  </View>

    : <LoginOut />;
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  viewImg: {
    height: "40%",
    width: "60%",
    position: "absolute",
    right: -35,
  },
  imagenCircle: {
    height: "120%",
    width: "120%",
    top: -95,
    left: 25,
  },
  userInfoView: {
    position: "absolute",
    paddingTop: "30%",
    paddingLeft: "25%",
  },
  optionsView: {
    alignContent: "center",
    alignItems: "center",
    paddingTop: "40%",
  },
  textPS: {
    top: 15,
    fontSize: 15,
    fontWeight: "bold",
  },
  textDescrip: {
    textAlign: "center",
    fontSize: 15,
    paddingTop: "10%",
    width: "70%",
  },
  btnView: {
    paddingTop: "2%",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
  graphImageView: {
    width: "80%",
    height: "55%",
  },
  graphImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
  },
});
