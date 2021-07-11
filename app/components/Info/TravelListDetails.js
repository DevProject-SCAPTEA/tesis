import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { height, tutorial2Spec, width } from "./theme";
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = tutorial2Spec;
import { AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

function TravelListDetails({ route }) {
    const { item, navigation } = route.params;

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <AntDesign
                name="arrowleft"
                size={24}
                color="#000"
                style={styles.AntDesign}
                onPress={navigation.goBack}
            />
            <SharedElement
                id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}
            >
                <View style={[StyleSheet.absoluteFillObject, { borderRadius: 18 }]}>
                    <Image
                        source={{ uri: item.image }}
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                resizeMode: "cover",
                            },
                        ]}
                    />
                </View>
            </SharedElement>
            <SharedElement id={`item.${item.key}.location`}>
                <Text style={styles.location}>{item.location}</Text>
                {/* <Text style={styles.location}>{item.data}</Text> */}
            </SharedElement>
            <View
                style={{
                    position: "absolute",
                    bottom: 120,
                }}
            >
                <Text
                    style={[
                        {
                            fontSize: 16,
                            width: "100%",
                            textTransform: "uppercase",
                            fontWeight: "800",
                            color: "#000",
                            marginHorizontal: SPACING,
                        },
                    ]}
                >
                    Activities
                </Text>
                <FlatList
                    data={[...Array(8).keys()]}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: SPACING }}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    backgroundColor: "white",
                                    padding: SPACING,
                                    width: width * 0.33,
                                    height: height * 0.3,
                                    marginRight: SPACING,
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                                    }}
                                    style={{ width: "100%", height: "70%", resizeMode: "cover" }}
                                />
                                <Text>Activity #{item + 1}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    AntDesign: {
        paddingHorizontal: SPACING,
        position: "absolute",
        top: 50,
        left: 10,
        zIndex: 2,
    },
    location: {
        fontSize: 25,
        color: "#000",
        fontWeight: "800",
        width: ITEM_WIDTH * 0.8,
        textTransform: "uppercase",
        position: "absolute",
        top: 100,
        left: SPACING * 2,
    },
});
TravelListDetails.sharedElements = (route) => {
    const { item } = route.params;
    return [
        {
            id: `item.${item.key}.photo`,
        },
        {
            id: `item.${item.key}.location`,
        },
    ];
};

// TravelListDetails.sharedElements = (route, otherRoute, showing) => {
//     const { item } = route.params;
//     console.log(item);
//     return [{
//         id: `item.${item.key}.photo`,
//     }, {
//         id: `item.${item.key}.location`,
//     },
//     ];
// };
export default TravelListDetails;
