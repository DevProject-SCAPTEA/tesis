import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default function InfoUser(props) {
  const { userInfo, toastRef, setLoading, setLoadingText } = props;
  const { photoURL, displayName, email, uid } = userInfo;
  //console.log(userInfo);

  const changeAvatar = async () => {
    //console.log("Avatar");
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    //console.log(resultPermission);
    const resultPermissionCamera =
      resultPermission.permissions.mediaLibrary.status;
    // console.log(resultPermissionCamera);
    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 5],
      });
      if (result.cancelled) {
        toastRef.current.show("Has cerrado la galeria");
      } else {
        uploadImage(result.uri)
          .then(() => {
            updatePhotoUrl();
          })
          .catch(() => {
            toastRef.current.show("Error al actualizar el avatar.");
          });
      }
    }
  };

  const uploadImage = async (uri) => {
    setLoadingText('Actulizando perfil');
    setLoading(true);

    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`avatar/${uid}`);

    return ref.put(blob);
  };

  const updatePhotoUrl = () => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response,
        };
        await firebase.auth().currentUser.updateProfile(update);
        setLoading(false);
      })
      .catch((e) => {
        toastRef.current.show("Error al actualizar el avatar.");
      });
  };

  return (
    <View style={styles.viewUserInfo}>
      <View style={styles.viewImg}>
        <Image
          rotation={-2}
          style={styles.imagenCircle}
          source={require("../../../assets/img/Img1.png")}
        />
      </View>
      <Avatar
        rounded
        size={120}
        showEditButton
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../../assets/img/avatar-default.jpg")
        }
        onPress={changeAvatar}
      />
      <View style={styles.textView}>
        <Text style={styles.textName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text>{email ? email : "Socia Login"}</Text>
        <Text>16/02/2021</Text>
        <Text>Edad: 23 years</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    paddingTop: 45,
    justifyContent: "center",
    flexDirection: "row",
    //backgroundColor: "#6464",
    height: "40%",
  },
  viewImg: {
    height: "100%",
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
  userInfoAvatar: {
    backgroundColor: "#f2f2f2",
    marginTop: "-5%",
    marginRight: "25%",
  },
  textView: {
    position: "absolute",
    top: "60%",
    left: "25%",
  },
  textName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
