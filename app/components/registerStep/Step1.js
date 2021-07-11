import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
export default function Step1() {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.textTitle}>
                Registro de usuario
                </Text>
            <Input
                placeholder='Correo electronico'
                containerStyle={styles.inputForm}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
            />
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
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