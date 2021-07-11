import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  Animated,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import Data from "./data";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tutorial2Spec } from "./theme";
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = tutorial2Spec;
import { SharedElement } from "react-navigation-shared-element";
export default function TravelList({ navigation, route }) {
  // const navigation = useNavigation();
  const scroolX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView>
      <View>
        <Animated.FlatList
          data={Data}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={FULL_SIZE - 100}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scroolX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 25) * FULL_SIZE,
              index * FULL_SIZE,
              (index + 25) * FULL_SIZE,
            ];

            const translateX = scroolX.interpolate({
              inputRange,
              outputRange: [ITEM_WIDTH, 5, -ITEM_WIDTH],
            });

            const scale = scroolX.interpolate({
              inputRange,
              outputRange: [5, 1.1, 5],
            });

            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push("details", {
                    item,
                    navigation,
                  });
                }}
                style={styles.intemContainer}
              >
                <SharedElement
                  id={`item.${item.key}.photo`}
                  style={[StyleSheet.absoluteFillObject]}
                >
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      {
                        overflow: "hidden",
                        borderRadius: RADIUS,
                      },
                    ]}
                  >
                    <Animated.Image
                      source={{ uri: item.image }}
                      style={[
                        StyleSheet.absoluteFillObject,
                        {
                          resizeMode: "cover",
                          transform: [{ scale }],
                        },
                      ]}
                    />
                  </View>
                </SharedElement>
                <SharedElement id={`item.${item.key}.location`}>
                  <Animated.Text
                    style={[
                      styles.location,
                      {
                        transform: [{ translateX }],
                      },
                    ]}
                  >
                    {item.location}
                  </Animated.Text>
                </SharedElement>
                <Text style={styles.data}>{item.data}</Text>
                {/* <View style={styles.days}>
                  <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                  <Text style={styles.daysLabel}>days</Text>
                </View> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  intemContainer: {
    width: ITEM_WIDTH / 1.2,
    height: ITEM_HEIGHT / 1.2,
    margin: SPACING,
  },
  location: {
    fontSize: 25,
    color: "#000",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING * 2,
    left: SPACING,
  },
  data: {
    fontSize: 14,
    color: "#000",
    fontWeight: "800",
    width: ITEM_WIDTH / 1.5,
    position: "absolute",
    top: SPACING * 8,
    left: SPACING * 2,
    textAlign: 'justify'
  },
  days: {
    position: "absolute",
    bottom: SPACING,
    left: SPACING,
    width: 42,
    height: 42,
    borderRadius: 26,
    backgroundColor: "tomato",
    alignContent: "center",
    alignItems: "center",
  },
  daysValue: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 18,
  },
  daysLabel: {
    color: "#fff",
    fontSize: 10,
  },
});
