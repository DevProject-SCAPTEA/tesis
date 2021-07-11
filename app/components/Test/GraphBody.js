import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import UserData from "../../components/Acccount/UserData";
import DonutChart from './DonutChart';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function defaultFormValue() {
    return {
        answer: '',
    };
}


export default function GraphBody(props) {
    const { userInfo, test } = props;
    const [Data, setData] = useState(defaultFormValue());
    const promedius = ((test.reduce((a, v) => a = a + v, 0)) / test.length)


    if (promedius != 0) {
        if (promedius >= 5 && promedius <= 9) {
            Data.answer = "Su estado de ánimo es normal";
        } else if (promedius >= 10 && promedius <= 18) {
            Data.answer = "Usted podria presentar un cuadro de depresión leve o minimo";
        } else if (promedius >= 19 && promedius <= 29) {
            Data.answer = "Usted podria presentar un cuadro de depresión moderado";
        } else if (promedius >= 30 && promedius <= 63) {
            Data.answer = "Usted podria presentar un cuadro de depresión severo";
        }
    }

    console.log(promedius)
    return (

        <View style={styles.viewContainer}>
            <View style={styles.viewImg}>
                <Image
                    rotation={-2}
                    style={styles.imagenCircle}
                    source={require("../../../assets/img/Img1.png")}
                />
            </View>

            <View style={styles.viewUserInfo}>
                <Text style={styles.textUserInfo}>Paciente...</Text>
                {userInfo && <UserData userInfo={userInfo} />}
            </View>
            <View style={styles.viewDonut}>
                <View style={styles.Donut}>
                    <DonutChart percentage={promedius} />
                </View>
                <View style={styles.AnswerDonut}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingRight: '50%'
                    }}>Observación:</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'normal',
                        left: 2,
                        textAlign: 'justify'
                    }}
                    >
                        {Data.answer}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            textAlign: 'justify',
                            left: 2
                        }}
                    >"Promedio de acuerdo a su historial de pruebas"</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewContainer: {
        width: width,
        height: '40%',
        //backgroundColor: '#6464',
        paddingTop: 25,
        paddingBottom: 25
    },
    viewImg: {
        height: "90%",
        width: "70%",
        position: "absolute",
        top: '-25%',
        left: '50%',
    },
    imagenCircle: {
        height: "120%",
        width: "120%",
    },
    viewUserInfo: {
        paddingTop: 15,
        width: '60%',
        paddingLeft: '10%'
    },
    textUserInfo: {
        fontWeight: "bold",
        fontSize: 15
    },
    viewDonut: {
        top: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignItems: 'center',
        // backgroundColor: '#646464',
        height: '50%',
        width: '100%',
        alignContent: 'center',
    },
    Donut: {
        alignItems: 'center',
        height: '65%',
        width: '30%',
        //  backgroundColor: '#6464',
        position: 'absolute',
        left: 10
    },
    AnswerDonut: {
        alignItems: 'center',
        height: '65%',
        width: '50%',
        // backgroundColor: '#6464',
        position: 'absolute',
        right: 70
    }
})