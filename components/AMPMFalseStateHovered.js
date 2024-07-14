import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AMPMFalseStateHovered = ({
  aMPMFalseStateHoveredPosition,
  aMPMFalseStateHoveredWidth,
  aMPMFalseStateHoveredHeight,
  aMPMFalseStateHoveredTop,
  aMPMFalseStateHoveredRight,
}) => {
  const aMPMFalseStateHoveredStyle = useMemo(() => {
    return {
      ...getStyleValue("position", aMPMFalseStateHoveredPosition),
      ...getStyleValue("width", aMPMFalseStateHoveredWidth),
      ...getStyleValue("height", aMPMFalseStateHoveredHeight),
      ...getStyleValue("top", aMPMFalseStateHoveredTop),
      ...getStyleValue("right", aMPMFalseStateHoveredRight),
    };
  }, [
    aMPMFalseStateHoveredPosition,
    aMPMFalseStateHoveredWidth,
    aMPMFalseStateHoveredHeight,
    aMPMFalseStateHoveredTop,
    aMPMFalseStateHoveredRight,
  ]);

  return (
    <View style={[styles.ampmfalseStatehovered, aMPMFalseStateHoveredStyle]}>
      <View style={[styles.am, styles.amFlexBox]}>
        <View style={[styles.stateLayer, styles.stateFlexBox]}>
          <Text style={[styles.label, styles.labelTypo]}>AM</Text>
        </View>
      </View>
      <View style={[styles.pm, styles.amFlexBox]}>
        <View style={styles.stateFlexBox}>
          <Text style={[styles.label1, styles.labelTypo]}>PM</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
  },
  stateFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  label: {
    color: Color.m3SysLightOnTertiaryContainer,
  },
  stateLayer: {
    backgroundColor: Color.m3StateLayersLightOnTertiaryContainerOpacity008,
  },
  am: {
    backgroundColor: Color.colorLightslategray,
    borderBottomWidth: 1,
  },
  label1: {
    color: Color.m3SysLightOnSurfaceVariant,
  },
  pm: {
    borderTopWidth: 1,
  },
  ampmfalseStatehovered: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.m3SysLightSurfaceContainerHigh,
    borderWidth: 1,
    width: 52,
    height: 80,
    overflow: "hidden",
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
  },
});

export default AMPMFalseStateHovered;
