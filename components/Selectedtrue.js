import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Selectedtrue = ({
  timeSelectorLabelText = "00",
  selectedtruePosition,
  selectedtrueBorderRadius,
  selectedtrueWidth,
  selectedtrueHeight,
  selectedtrueBackgroundColor,
}) => {
  const selectedtrueStyle = useMemo(() => {
    return {
      ...getStyleValue("position", selectedtruePosition),
      ...getStyleValue("borderRadius", selectedtrueBorderRadius),
      ...getStyleValue("width", selectedtrueWidth),
      ...getStyleValue("height", selectedtrueHeight),
      ...getStyleValue("backgroundColor", selectedtrueBackgroundColor),
    };
  }, [
    selectedtruePosition,
    selectedtrueBorderRadius,
    selectedtrueWidth,
    selectedtrueHeight,
    selectedtrueBackgroundColor,
  ]);

  return (
    <View
      style={[styles.selectedtrue, styles.timeTextFlexBox, selectedtrueStyle]}
    >
      <View style={styles.selected}>
        <Text style={[styles.timeText, styles.timeTextFlexBox]}>
          {timeSelectorLabelText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeTextFlexBox: {
    justifyContent: "center",
    width: 96,
    alignItems: "center",
  },
  timeText: {
    fontSize: FontSize.size_38xl,
    lineHeight: 64,
    fontFamily: FontFamily.robotoRegular,
    color: Color.m3SysLightOnPrimaryContainer,
    textAlign: "center",
    display: "flex",
    height: 80,
    justifyContent: "center",
    width: 96,
  },
  selected: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.m3SysLightPrimaryContainer,
    alignItems: "center",
    overflow: "hidden",
  },
  selectedtrue: {
    overflow: "hidden",
    justifyContent: "center",
    width: 96,
  },
});

export default Selectedtrue;
