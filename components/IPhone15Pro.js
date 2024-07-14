import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IPhone15Pro = () => {
  return (
    <View style={styles.iphone15Pro}>
      <Image
        style={styles.iphone15ProBlackTitanium}
        contentFit="cover"
        source={require("../assets/iphone-15-pro--black-titanium--portrait.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone15ProBlackTitanium: {
    position: "absolute",
    top: -40,
    left: -40,
    width: 473,
    height: 932,
  },
  iphone15Pro: {
    width: 393,
    height: 852,
  },
});

export default IPhone15Pro;
