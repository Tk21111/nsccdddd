import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { StyleVariable } from "../GlobalStyles";

const ButtonIcon = () => {
  return (
    <Image
      style={styles.buttonIcon}
      contentFit="cover"
      source={require("../assets/button.png")}
    />
  );
};

const styles = StyleSheet.create({
  buttonIcon: {
    position: "absolute",
    top: 774,
    left: 113,
    borderRadius: StyleVariable.radius200,
    width: 166,
    height: 48,
    overflow: "hidden",
  },
});

export default ButtonIcon;
