import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements';
const Spacing = 15;

export const { width, height } = Dimensions.get("window");
export default function InfoBody() {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewCircle}>

                <Text style={styles.infoText}>
                    Trastorno del estado del ánimo
                </Text>

                <Text style={styles.info}>
                    Toda la información correspondiente al Trastorno del estado del Ánimo
                </Text>

            </View>
            <View style={styles.viewList}>
                <FlatList
                    data={[...Array(4).keys()]}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 12 }}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    // backgroundColor: "white",
                                    padding: 12,
                                    width: width * 0.5,
                                    height: '80%',
                                    marginRight: 12,
                                    borderRadius: 16,
                                    borderColor: '#6464',
                                    borderWidth: 2
                                }}
                            >
                                {/* <Image
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                                    }}
                                    style={{ width: "100%", height: "70%", resizeMode: "cover" }}
                                /> */}
                                <Text>Activity #{item + 1}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        width: width,
        height: height / 2.5,
        // backgroundColor: '#6464',
        alignContent: 'center',
        alignItems: 'center'
    },
    viewCircle: {
        width: '80%',
        height: '40%',
        top: Spacing * 3,
        // backgroundColor: '#012536'
    },
    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    infoText: {
        top: Spacing,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    info: {
        fontSize: 14,
        fontWeight: '900',
        top: Spacing,
        paddingLeft: Spacing,
        paddingRight: Spacing,
        textAlign: 'center'
    },
    viewList: {
        width: '90%',
        height: '60%',
        top: Spacing,
        // backgroundColor: '#6464'
    }
})
