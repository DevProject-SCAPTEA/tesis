import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
export default function Step2() {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.textTitle}>
                Registro de usuario
            </Text>
            <Input
                placeholder='Nombre'
                containerStyle={styles.inputForm}
            />
            <Input
                placeholder='Apellido'
                containerStyle={styles.inputForm}
            />
            <Input
                placeholder='Sexo'
                containerStyle={styles.inputForm}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    textTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputForm: {
        marginTop: 10,
        width: '100%',
        height: '23%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2a9d8f'
    }
})