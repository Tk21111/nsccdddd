import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StyleTextStateenabledSho = ({
  labelText = "Label",
  styleTextStateenabledShoPosition,
  styleTextStateenabledShoMarginLeft,
}) => {
  const styleTextStateenabledShoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", styleTextStateenabledShoPosition),
      ...getStyleValue("marginLeft", styleTextStateenabledShoMarginLeft),
    };
  }, [styleTextStateenabledShoPosition, styleTextStateenabledShoMarginLeft]);

  return (
    <View
      style={[
        styles.styletextStateenabledSho,
        styles.stateLayerFlexBox,
        styleTextStateenabledShoStyle,
      ]}
    >
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
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  stateLayer: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  styletextStateenabledSho: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
});

export default StyleTextStateenabledSho;
