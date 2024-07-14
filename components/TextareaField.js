import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

const TextareaField = ({
  label = "วิธีการทำ",
  description = "Description",
  error = "Hint",
  hasDescription = false,
  hasError = false,
  hasLabel = true,
}) => {
  return (
    <View style={styles.textareaField}>
      {hasLabel && (
        <Text style={[styles.label, styles.labelTypo]}>{label}</Text>
      )}
      {hasDescription && (
        <Text style={[styles.description, styles.textareaSpaceBlock]}>
          {description}
        </Text>
      )}
      <TextInput style={[styles.textarea, styles.textareaSpaceBlock]} />
      {hasError && (
        <Text style={[styles.description, styles.textareaSpaceBlock]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  textareaSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  label: {
    color: Color.textDefaultDefault,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  description: {
    color: Color.textDefaultSecondary,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  textarea: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    minHeight: 80,
  },
  textareaField: {
    position: "absolute",
    top: 447,
    left: 67,
    width: 240,
    height: 122,
  },
});

export default TextareaField;
