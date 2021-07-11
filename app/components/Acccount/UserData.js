import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function UserData(props) {
    const { userInfo, toastRef, setLoading, setLoadingText } = props;
    const { photoURL, displayName, email, uid } = userInfo;
    return (
        <View>
            <Text style={styles.textName}>
                {displayName ? displayName : "Anónimo"}
            </Text>
            <Text>
                {email ? email : "Socia Login"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textName: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
