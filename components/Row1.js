import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Row1 = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>1</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>2</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>3</Text>
      </View>
      <View style={[styles.dateDefault2, styles.dateFlexBox]}>
        <Text style={[styles.text3, styles.textTypo]}>4</Text>
      </View>
      <View style={[styles.dateDefault2, styles.dateFlexBox]}>
        <Text style={[styles.text3, styles.textTypo]}>5</Text>
      </View>
      <View style={[styles.dateDefault2, styles.dateFlexBox]}>
        <Text style={[styles.text3, styles.textTypo]}>6</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>7</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateFlexBox: {
    justifyContent: "center",
    height: 48,
    width: 48,
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  text: {
    color: Color.colorSilver,
  },
  dateInactive: {
    padding: Padding.p_3xs,
  },
  text3: {
    color: Color.colorGray_200,
  },
  dateDefault2: {
    padding: Padding.p_xl,
  },
  row: {
    flexDirection: "row",
    transform: [
      {
        rotate: "-0.5deg",
      },
    ],
    alignItems: "center",
  },
});

export default Row1;
