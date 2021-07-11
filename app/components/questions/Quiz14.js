import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RadioButtonRN from 'radio-buttons-react-native';
export default function Quiz14(props) {
  const { Data } = props;
  const data = [
    {
      label: 'Nunca', value: 0
    },
    {
      label: 'Casi nunca', value: 1
    },
    {
      label: 'Siempre', value: 2
    }
  ];
  return (
    <View style={styles.view}>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>
          Pregunta 14 de 20
                </Text>
        <View style={styles.viewQuiz}>
          <Text style={styles.textQuiz}>
            No he notado ningún cambio en mis hábitos de sueño?
                  </Text>
        </View>
      </View>
      <View style={styles.viewQuestions}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => Data.pregunta14 = (e.value)}
          deactiveColor='#2a9d8f'
          activeColor='#9341b3'
          boxStyle={styles.box}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textInfo}>
          Tu respuesta deben estar enfocadas en tus
          ultimas dos semanas.
              </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    alignContent: 'center',
    height: '80%',
    width: '60%'
  },
  viewTitle: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8c39ab'
  },
  viewQuiz: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: 40
  },
  textQuiz: {
    fontSize: 16,
  },
  viewQuestions: {
    position: 'absolute',
    top: '35%',
    height: '40%'
  },
  box: {
    width: 200,
    height: 35
  },
  viewText: {
    position: "absolute",
    top: '80%',
  },
  textInfo: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})