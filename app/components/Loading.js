import React from "react";
import { StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { color } from "react-native-reanimated";

export default function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Spinner
      visible={isVisible}
      textContent={text}
      textStyle={styles.text}
      animation="slide"
      overlayColor={"rgba(0, 0, 0, 0.5)"}
    />
  );
}
const styles = StyleSheet.create({
  text: {
    color: "#ffff",
  },
});
