import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import { StyleVariable, Color } from "../GlobalStyles";

const InputCal = () => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
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
  },
});

export default InputCal;
