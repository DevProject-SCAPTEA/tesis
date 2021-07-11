import React, { useRef } from "react";
import {
    Dimensions,
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Acccount/RegisterForm";
const { width, height } = Dimensions.get("window");
export default function RegisterUser() {
    const toastRef = useRef();
    return (
        <ScrollView style={styles.Scroll}>
            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Hola, Bienvenido.</Text>
                <Image
                    source={require("../../../assets/img/Login.png")}
                    resizeMode="contain"
                    style={styles.Logo}
                />
            </View>
            <View style={styles.viewQuiz}>
                <RegisterForm toastRef={toastRef} />
            </View>
            <Toast ref={toastRef} position='center' opacity={0.9} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    Scroll: {
        backgroundColor: "#ffff",
        alignContent: "center",
        height: height,
        width: width,
    },
    viewTitle: {
        backgroundColor: "#ffff",
        left: "5%",
        width: "90%",
        height: 130,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: "bold",
        top: "3%",
        left: "15%",
    },
    Logo: {
        top: "3%",
        height: 110,
        width: "100%",
    },
    viewQuiz: {
        alignContent: "center",
        alignItems: "center",
        left: "5%",
        width: "90%",
        height: height - 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#9341b3",
    },
    viewQuizBody: {
        width: "100%",
    },
});
