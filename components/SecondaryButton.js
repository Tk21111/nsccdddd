import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, Padding, Border } from "../GlobalStyles";

const SecondaryButton = ({ labelText = "น้องก้า edit ได้ยัง" }) => {
  return (
    <View style={[styles.secondaryButton, styles.stateLayerFlexBox]}>
      <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 90,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.colorDimgray,
    textAlign: "center",
  },
  stateLayer: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  secondaryButton: {
    borderRadius: Border.br_81xl,
    height: 133,
    overflow: "hidden",
  },
});

export default SecondaryButton;
