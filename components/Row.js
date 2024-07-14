import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Row = () => {
  return (
    <View style={styles.row}>
      <View style={styles.weekday}>
        <Text style={styles.mo}>Mo</Text>
      </View>
      <View style={styles.weekday}>
        <Text style={styles.mo}>Tu</Text>
      </View>
      <View style={styles.weekday}>
        <Text style={styles.mo}>We</Text>
      </View>
      <View style={styles.weekday}>
        <Text style={styles.mo}>Th</Text>
      </View>
      <View style={styles.weekday}>
        <Text style={styles.mo}>Fr</Text>
      </View>
      <View style={styles.weekday}>
        <Text style={styles.mo}>Sa</Text>
      </View>
      <View style={styles.weekday}>
        <Text style={styles.mo}>Su</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mo: {
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  weekday: {
    width: 48,
    height: 48,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
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

export default Row;
