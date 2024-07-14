import React, { useMemo } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputField1 = ({ label, error, errorTop, errorHeight }) => {
  const inputFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("top", errorTop),
      ...getStyleValue("height", errorHeight),
    };
  }, [errorTop, errorHeight]);

  return (
    <View style={[styles.inputField, inputFieldStyle]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.description, styles.errorTypo]}>Description</Text>
      <TextInput style={styles.input} />
      <Text style={[styles.error, styles.errorTypo]}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorTypo: {
    display: "none",
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  label: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    color: Color.textDefaultDefault,
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    marginTop: 8,
    alignSelf: "stretch",
  },
  input: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    marginTop: 8,
    alignSelf: "stretch",
  },
  error: {
    marginTop: 8,
    color: Color.textDefaultDefault,
    display: "none",
  },
  inputField: {
    position: "absolute",
    top: 230,
    left: 67,
  },
});

export default InputField1;
