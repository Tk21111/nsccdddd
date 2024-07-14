import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Row2 = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>8</Text>
      </View>
      <View style={[styles.dateDefault1, styles.dateFlexBox]}>
        <Text style={[styles.text1, styles.textTypo]}>9</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>10</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>11</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>12</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>13</Text>
      </View>
      <View style={[styles.dateDefault1, styles.dateFlexBox]}>
        <Text style={[styles.text6, styles.textTypo]}>14</Text>
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
    color: Color.colorGray_200,
  },
  dateDefault: {
    padding: Padding.p_xl,
  },
  text1: {
    color: "#fd7041",
  },
  dateDefault1: {
    padding: Padding.p_3xs,
  },
  text6: {
    color: Color.colorSilver,
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

export default Row2;
