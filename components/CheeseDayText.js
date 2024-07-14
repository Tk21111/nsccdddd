import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CheeseDayText = () => {
  return <Text style={styles.cheeseDay}>Cheese Day</Text>;
};

const styles = StyleSheet.create({
  cheeseDay: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    transform: [
      {
        rotate: "-0.7deg",
      },
    ],
  },
});

export default CheeseDayText;
