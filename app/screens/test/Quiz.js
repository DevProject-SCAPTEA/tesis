import React, { useRef, useState } from "react";
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

import Loading from "../../components/Loading";
const { width, height } = Dimensions.get("window");
export default function Quiz() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const isLoading = () => {
    setLoading(true);
  }
  //console.log(navigation);
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/Relax.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>Bienvenido.</Text>
      <Text style={styles.text}>Aqui podras realizar tus Test</Text>
      <View style={styles.viewCircle}>
        <View centerContent={true} style={styles.viewText}>
          <Text style={styles.description}>
            SCAPTEA es un sistema que te permitira realizar test corespondientes
            a trastornos del Estado del Ánimo. Podras visualizar tus resultados
            y datos estadisticos de los mismo.
          </Text>
        </View>
        <View style={styles.viewContainer}>
          <GradientButton
            text="Ir al Test"
            style={{ marginVertical: 8 }}
            textStyle={{ fontSize: 20 }}
            gradientBegin="#2a9d8f"
            gradientEnd="#9341b3"
            gradientDirection="diagonal"
            height={50}
            width={"60%"}
            radius={18}
            impact
            impactStyle="Light"
            onPressAction={() => {
              navigation.navigate("quiz")
            }}
          ></GradientButton>
        </View>
        <Loading isVisible={loading} text={'Cargando prueba'} />
      </View>
    </ScrollView>
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
    height: "50%",
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
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  viewContainer: {
    alignItems: "center",
  },
});
