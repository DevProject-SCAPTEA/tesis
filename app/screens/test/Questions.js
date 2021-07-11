import React, { useState, useEffect, useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";
import Toast from "react-native-easy-toast";
import { useNavigation } from "@react-navigation/native";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);
import Quiz1 from "../../components/questions/Quiz1";
import Quiz2 from "../../components/questions/Quiz2";
import Quiz3 from "../../components/questions/Quiz3";
import Quiz4 from "../../components/questions/Quiz4";
import Quiz5 from "../../components/questions/Quiz5";
import Quiz6 from "../../components/questions/Quiz6";
import Quiz7 from "../../components/questions/Quiz7";
import Quiz8 from "../../components/questions/Quiz8";
import Quiz9 from "../../components/questions/Quiz9";
import Quiz10 from "../../components/questions/Quiz10";
import Quiz11 from "../../components/questions/Quiz11";
import Quiz12 from "../../components/questions/Quiz12";
import Quiz13 from "../../components/questions/Quiz13";
import Quiz14 from "../../components/questions/Quiz14";
import Quiz15 from "../../components/questions/Quiz15";
import Quiz16 from "../../components/questions/Quiz16";
import Quiz17 from "../../components/questions/Quiz17";
import Quiz18 from "../../components/questions/Quiz18";
import Quiz19 from "../../components/questions/Quiz19";
import Quiz20 from "../../components/questions/Quiz20";
import Loading from "../../components/Loading";
import { set } from "lodash";

const { width, height } = Dimensions.get("window");

function defaultFormValue() {
  return {
    pregunta1: 0,
    pregunta2: 0,
    pregunta3: 0,
    pregunta4: 0,
    pregunta5: 0,
    pregunta6: 0,
    pregunta7: 0,
    pregunta8: 0,
    pregunta9: 0,
    pregunta10: 0,
    pregunta11: 0,
    pregunta12: 0,
    pregunta13: 0,
    pregunta14: 0,
    pregunta15: 0,
    pregunta16: 0,
    pregunta17: 0,
    pregunta18: 0,
    pregunta19: 0,
    pregunta20: 0,
    suma: 0,
    answer: "",
    createBy: "",
    createDate: null,
  };
}

export default function Questions() {
  const toastRef = useRef();
  const navigation = useNavigation();
  const [Data, setData] = useState(defaultFormValue());
  const [userInfo, setUserInfo] = useState(null);
  const [isVisible, setIsVisible] = useState(null);
  const [isActivate, setIsActivate] = useState(false);

  Data.createBy = firebase.auth().currentUser.uid;
  Data.createDate = new Date();
  // console.log(Data.createDate + "  " + Data.createBy);
  const addTest = () => {
    Data.suma =
      Data.pregunta1 +
      Data.pregunta2 +
      Data.pregunta3 +
      Data.pregunta4 +
      Data.pregunta5 +
      Data.pregunta6 +
      Data.pregunta7 +
      Data.pregunta8 +
      Data.pregunta9 +
      Data.pregunta10 +
      Data.pregunta11 +
      Data.pregunta12 +
      Data.pregunta13 +
      Data.pregunta14 +
      Data.pregunta15 +
      Data.pregunta16 +
      Data.pregunta17 +
      Data.pregunta18 +
      Data.pregunta19 +
      Data.pregunta20;
    if (Data.suma >= 5 && Data.suma <= 9) {
      Data.answer = "Su estado de ánimo es normal";
    } else if (Data.suma >= 10 && Data.suma <= 18) {
      Data.answer =
        "Usted podria presentar un cuadro de depresión leve o minimo";
    } else if (Data.suma >= 19 && Data.suma <= 29) {
      Data.answer = "Usted podria presentar un cuadro de depresión moderado";
    } else if (Data.suma >= 30 && Data.suma <= 63) {
      Data.answer = "Usted podria presentar un cuadro de depresión severo";
    }
    console.log(Data.suma);
    console.log(Data.answer);
    setIsVisible(true);
    db.collection("tests")
      .add({
        r1: Data.pregunta1,
        r2: Data.pregunta2,
        r3: Data.pregunta3,
        r4: Data.pregunta4,
        r5: Data.pregunta5,
        r6: Data.pregunta6,
        r7: Data.pregunta7,
        r8: Data.pregunta8,
        r9: Data.pregunta9,
        r10: Data.pregunta10,
        r11: Data.pregunta11,
        r12: Data.pregunta12,
        r13: Data.pregunta13,
        r14: Data.pregunta14,
        r15: Data.pregunta15,
        r16: Data.pregunta16,
        r17: Data.pregunta17,
        r18: Data.pregunta18,
        r19: Data.pregunta19,
        r20: Data.pregunta20,
        createBy: Data.createBy,
        createDate: Data.createDate,
        totalTest: Data.suma,
        answer: Data.answer,
        name: userInfo.displayName,
      })
      .then(() => {
        setIsVisible(false);
        navigation.navigate("test");
        toastRef.current.show("Pruebas registrada");
      })
      .catch(() => {
        setIsVisible(false);
        setIsActivate(false);
        toastRef.current.show(
          "No se pudo registrar su prueba, intente nuevamente"
        );
      });
    //console.log('send');
  };
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user);
    })();
  }, []);
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewTitle}>
        <View style={styles.viewImg}>
          <Image
            rotation={-2}
            style={styles.imagenCircle}
            source={require("../../../assets/img/Img1.png")}
          />
        </View>
        <Image
          style={styles.imagenIcon}
          source={require("../../../assets/img/Quiz.png")}
        />
        <Text style={styles.Text}>Test de depresión</Text>
      </View>
      <View style={styles.viewSwiper}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide}>
            <Quiz1 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz2 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz3 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz4 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz5 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz6 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz7 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz8 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz9 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz10 Data={Data} />
          </View>

          <View style={styles.slide}>
            <Quiz11 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz12 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz13 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz14 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz15 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz16 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz17 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz18 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz19 Data={Data} />
          </View>
          <View style={styles.slide}>
            <Quiz20 Data={Data} setIsActivate={setIsActivate} />
          </View>
        </Swiper>
        {isActivate && (
          <Icon
            type="material-community"
            name="send-circle-outline"
            color="#9341b3"
            size={55}
            containerStyle={styles.btnStyle}
            visible={isActivate}
            onPress={() => addTest()}
          />
        )}
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={isVisible} text={"Guardando prueba"} />
    </View>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#ffff",
    height: height,
    width: width,
  },
  viewTitle: {
    backgroundColor: "#ffff",
    width: "100%",
    height: 150,
  },
  viewImg: {
    height: "100%",
    width: "40%",
    position: "absolute",
    right: 0,
  },
  imagenCircle: {
    height: "150%",
    width: "150%",
    top: -65,
    left: 25,
  },
  imagenIcon: {
    position: "absolute",
    height: 140,
    width: 140,
    borderRadius: 15,
    left: "25%",
  },
  Text: {
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    top: "85%",
    left: "25%",
  },
  viewSwiper: {
    backgroundColor: "#ffff",
    width: "100%",
    height: height - 280,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  btnStyle: {
    position: "absolute",
    bottom: 75,
    right: 30,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    opacity: 1.0,
  },
  text: {
    color: "#646464",
    fontSize: 30,
    fontWeight: "bold",
  },
});
