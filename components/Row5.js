import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Row5 = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>29</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>30</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text2, styles.textTypo]}>1</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text2, styles.textTypo]}>2</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text2, styles.textTypo]}>3</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text2, styles.textTypo]}>4</Text>
      </View>
      <View style={[styles.dateInactive, styles.dateFlexBox]}>
        <Text style={[styles.text2, styles.textTypo]}>5</Text>
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
  text2: {
    color: Color.colorSilver,
  },
  dateInactive: {
    padding: Padding.p_3xs,
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

export default Row5;
