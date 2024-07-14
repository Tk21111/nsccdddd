import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Row4 = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>22</Text>
      </View>
      <View style={[styles.dateDefault1, styles.dateFlexBox]}>
        <Text style={[styles.text1, styles.textTypo]}>23</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>24</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>25</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>26</Text>
      </View>
      <View style={[styles.dateDefault, styles.dateFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>27</Text>
      </View>
      <View style={[styles.dateDefault1, styles.dateFlexBox]}>
        <Text style={[styles.text1, styles.textTypo]}>28</Text>
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
    color: Color.colorSilver,
  },
  dateDefault1: {
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

export default Row4;
