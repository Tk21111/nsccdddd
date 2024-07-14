import * as React from "react";
import { StyleSheet, View } from "react-native";

const Days = () => {
  return <View style={styles.days} />;
};

const styles = StyleSheet.create({
  days: {
    width: 336,
    height: 288,
    alignItems: "center",
    transform: [
      {
        rotate: "-0.5deg",
      },
    ],
  },
});

export default Days;
