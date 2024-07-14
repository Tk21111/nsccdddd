import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const Row3 = () => {
  return (
    <View style={styles.row}>
      <View style={styles.dateDefault}>
        <Text style={[styles.text, styles.textTypo]}>15</Text>
      </View>
      <View style={styles.dateFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>16</Text>
      </View>
      <View style={styles.dateDefault}>
        <Text style={[styles.text, styles.textTypo]}>17</Text>
      </View>
      <View style={[styles.dateActive, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>18</Text>
      </View>
      <View style={styles.dateDefault}>
        <Text style={[styles.text, styles.textTypo]}>19</Text>
      </View>
      <View style={styles.dateDefault}>
        <Text style={[styles.text, styles.textTypo]}>20</Text>
      </View>
      <View style={styles.dateFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>21</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  dateFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    height: 48,
    width: 48,
    alignItems: "center",
  },
  text: {
    color: Color.colorGray_200,
  },
  dateDefault: {
    padding: Padding.p_xl,
    justifyContent: "center",
    height: 48,
    width: 48,
    alignItems: "center",
  },
  text1: {
    color: Color.colorSilver,
  },
  dateActive: {
    borderRadius: 25,
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

export default Row3;
