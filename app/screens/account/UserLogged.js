import React, { useRef, useState, useEffect } from "react";
import { Dimensions, View, Text, Button, StyleSheet } from "react-native";
import Toast from "react-native-easy-toast";
import GradientButton from "react-native-gradient-buttons";
import { useNavigation } from "@react-navigation/native";
//import * as firebase from "firebase";
import { firebaseApp } from "../../../app/utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

import Loading from "../../components/Loading";
import InfoUser from "../../components/Acccount/InfoUser";
import AccountOptins from "../../components/Acccount/AccountOptins";
import UserExtraData from "../../components/Acccount/UserExtraData";
import Modal from "../../components/Modal";

const db = firebaseApp.firestore(firebaseApp);
const { width, height } = Dimensions.get("window");
export default function UserLogged() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [extraData, setExtraData] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toastRef = useRef();
  console.log(extraData);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // id user
        var uid = user.uid;

        // user data
        (async () => {
          const user = await firebase.auth().currentUser;
          setUserInfo(user);
        })();

        //user extra Data user
        const resultTests = [];
        // const id = firebase.auth().currentUser.uid;
        db.collection("userData")
          .where("createBy", "==", uid)
          .onSnapshot((docs) => {
            let userData = [];
            // let date = [];
            docs.forEach((doc) => {
              const Data = doc.data();
              Data.id = doc.id;
              userData.push(Data);
            });
            if (userData.length == 0) {
              setShowModal(true); // return <UserExtraData />;
            } else {
              console.log("ok");
            }

            setExtraData(userData);

            // console.log(extraData);
          });
      } else {
        console.log("error user no logged");
      }
    });
  }, []);

  return (
    <View style={styles.containerView}>
      {userInfo && (
        <InfoUser
          userInfo={userInfo}
          toastRef={toastRef}
          setLoading={setLoading}
          setLoadingText={setLoadingText}
        />
      )}
      <AccountOptins
        userInfo={userInfo}
        toastRef={toastRef}
        setLoading={setLoading}
        setLoadingText={setLoadingText}
      />
      <View style={styles.btnView}>
        <GradientButton
          text="Cerrar sesión"
          style={{ marginVertical: 8 }}
          textStyle={{ fontSize: 20 }}
          gradientBegin="#2a9d8f"
          gradientEnd="#9341b3"
          gradientDirection="diagonal"
          height={50}
          width={"70%"}
          radius={18}
          impact
          impactStyle="Light"
          onPressAction={() => firebase.auth().signOut()}
        ></GradientButton>
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={loading} text={loadingText} />
      <Modal isVisible={showModal} setIsVisible={setShowModal}>
        <UserExtraData setShowModal={setShowModal} />
        {/* <Text>Hola modal</Text> */}
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#ffff",
    height: height,
    width: width,
  },
  btnView: {
    alignItems: "center",
    alignContent: "center",
    // backgroundColor: "#6464",
  },
});
