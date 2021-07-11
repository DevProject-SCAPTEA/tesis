import React, { useState } from "react";

import { firebaseApp } from "./firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebaseApp.firestore(firebaseApp);

export function validateData(uid) {
  const [state, setState] = useState(null);
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
      if (userData == "") {
        setStatestate = false;
      } else {
        setStatestate = true;
        console.log("ok");
      }

      //   setExtraData(userData);

      // console.log(extraData);
    });
  return state;
}
