import React from "react";
import {
    Dimensions,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
} from "react-native";
import GradientButton from "react-native-gradient-buttons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
export default function LoginOut() {
    const navigation = useNavigation();
    //console.log(navigation);
    return (
        <View centerContent={true} style={styles.viewBody}>
            <Image
                source={require("../../../assets/img/Relax.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.text}>Bienvenido.</Text>
            <Text style={styles.text}>Consulta aqui tu perfil de SCAPTEA</Text>
            <View style={styles.viewCircle}>
                <View centerContent={true} style={styles.viewText}>
                    <Text style={styles.description}>
                        SCAPTEA es un sistema que te permitira realizar test corespondientes
                        a trastornos del Estado del Ánimo. Podras visualizar tus resultados
                        y datos estadisticos de los mismo.
                    </Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.sesionText}>
                        Debes iniciar sesión, para acceder a este modulo.
                    </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    viewBody: {
        backgroundColor: "#ffff",
        alignContent: "center",
        height: height,
        width: width,
    },
    image: {
        height: 250,
        width: "100%",
        marginBottom: 40,
    },
    text: {
        top: "-8%",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    viewCircle: {
        top: "-5%",
        left: "5%",
        height: "40%",
        width: "90%",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#9341b3",
    },
    viewText: {
        top: "5%",
        left: "5%",
        width: "90%",
    },
    description: {
        paddingTop: '15%',
        textAlign: "center",
        marginBottom: 20,
        fontSize: 16,
    },
    viewContainer: {
        alignContent: 'center',
        alignItems: "center",
        left: "10%",
        width: '80%',
        height: '40%',

    },
    sesionText: {
        paddingTop: '5%',
        textAlign: "center",
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2a9d8f'
    }
});
