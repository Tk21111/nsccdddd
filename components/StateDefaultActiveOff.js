import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultActiveOff = ({
  label = "Label",
  stateDefaultActiveOffPosition,
  stateDefaultActiveOffTop,
  stateDefaultActiveOffLeft,
  stateDefaultActiveOffWidth,
  stateDefaultActiveOffHeight,
}) => {
  const stateDefaultActiveOffStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultActiveOffPosition),
      ...getStyleValue("top", stateDefaultActiveOffTop),
      ...getStyleValue("left", stateDefaultActiveOffLeft),
      ...getStyleValue("width", stateDefaultActiveOffWidth),
      ...getStyleValue("height", stateDefaultActiveOffHeight),
    };
  }, [
    stateDefaultActiveOffPosition,
    stateDefaultActiveOffTop,
    stateDefaultActiveOffLeft,
    stateDefaultActiveOffWidth,
    stateDefaultActiveOffHeight,
  ]);

  return (
    <View style={[styles.statedefaultActiveoff, stateDefaultActiveOffStyle]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.textNeutralTertiary,
    textAlign: "left",
  },
  statedefaultActiveoff: {
    borderTopLeftRadius: StyleVariable.radius100,
    borderTopRightRadius: StyleVariable.radius100,
    borderStyle: "solid",
    borderColor: Color.borderNeutralTertiary,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: StyleVariable.space300,
    paddingVertical: StyleVariable.space100,
  },
});

export default StateDefaultActiveOff;
