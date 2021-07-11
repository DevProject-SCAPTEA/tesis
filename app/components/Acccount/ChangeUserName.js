import React, { useState } from 'react'
import { StyleSheet, Text, View, input } from 'react-native'
import { Input, Icon } from "react-native-elements";
import GradientButton from "react-native-gradient-buttons";
import *as firebase from 'firebase';

export default function ChangeUserName(props) {
    const { displayName, setLoading, setLoadingText, toastRef, setShowModal } = props;
    const [dataUser, setDataUser] = useState(defaultFormValue());
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    const onChange = (e, type) => {
        setDataUser({ ...dataUser, [type]: e.nativeEvent.text });
    };

    const onSubmit = () => {
        setError(null);
        setError2(null);
        if (!dataUser.name) {
            setError('Llenar el campo.')
        } else if (!dataUser.lastName) {
            setError2('Llenar el campo.')
        } else if (dataUser.name + ' ' + dataUser.lastName === displayName) {
            setError('Ingrese un nombre diferente');
            setError2('Ingrese un nombre diferente');
        } else {
            setLoadingText('Actualizando');
            setLoading(true);

            const update = {
                displayName: dataUser.name + ' ' + dataUser.lastName
            }
            firebase
                .auth()
                .currentUser.updateProfile(update)
                .then(() => {
                    setLoading(false);
                    setShowModal(false);
                    console.log('ok');
                })
                .catch(() => {
                    setLoading(false);
                    setShowModal(false);
                    setError('Error al actualizar.')
                })
        }
        //console.log(dataUser.name + ', ' + dataUser.lastName);
    }

    function defaultFormValue() {
        return {
            name: "",
            lastName: "",
        };
    }
    return (
        <View style={styles.viewInput}>
            <Text style={styles.textTitle}>Cambiar Nombre y Apellido</Text>
            <Input
                placeholder='Nombre'
                containerStyle={styles.input}
                rightIcon={{
                    type: 'material-community',
                    name: 'account-edit',
                    color: '#6464'
                }}
                defaultValue={displayName || ''}
                onChange={(e) => onChange(e, "name")}
                errorMessage={error}
            />
            <Input
                placeholder='Apellido'
                containerStyle={styles.input}
                rightIcon={{
                    type: 'material-community',
                    name: 'account-edit',
                    color: '#6464'
                }}
                defaultValue={displayName || ''}
                onChange={(e) => onChange(e, "lastName")}
                errorMessage={error2}
            />
            <GradientButton
                text="Cambiar"
                style={{ marginVertical: 8 }}
                textStyle={{ fontSize: 20 }}
                gradientBegin="#2a9d8f"
                gradientEnd="#9341b3"
                gradientDirection="diagonal"
                height={50}
                width={"80%"}
                radius={18}
                impact
                impactStyle="Light"
                onPressAction={() => onSubmit()}

            ></GradientButton>
        </View>
    )
}

const styles = StyleSheet.create({
    viewInput: {
        alignContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        width: '80%'
    }
})
