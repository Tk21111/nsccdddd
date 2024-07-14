import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SelectedFalseStateEnabled = ({
  hourText = "00",
  selectedFalseStateEnabledPosition,
  selectedFalseStateEnabledTop,
  selectedFalseStateEnabledLeft,
  selectedFalseStateEnabledHeight,
}) => {
  const selectedFalseStateEnabledStyle = useMemo(() => {
    return {
      ...getStyleValue("position", selectedFalseStateEnabledPosition),
      ...getStyleValue("top", selectedFalseStateEnabledTop),
      ...getStyleValue("left", selectedFalseStateEnabledLeft),
      ...getStyleValue("height", selectedFalseStateEnabledHeight),
    };
  }, [
    selectedFalseStateEnabledPosition,
    selectedFalseStateEnabledTop,
    selectedFalseStateEnabledLeft,
    selectedFalseStateEnabledHeight,
  ]);

  return (
    <View
      style={[
        styles.selectedfalseStateenabled,
        styles.containerFlexBox,
        selectedFalseStateEnabledStyle,
      ]}
    >
      <View style={[styles.container, styles.containerFlexBox]}>
        <View style={[styles.stateLayer, styles.containerFlexBox]}>
          <Text style={styles.hour}>{hourText}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  hour: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.robotoRegular,
    color: Color.m3SysLightOnSurface,
    textAlign: "center",
  },
  stateLayer: {
    height: 48,
    width: 48,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedfalseStateenabled: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    width: 48,
  },
});

export default SelectedFalseStateEnabled;
