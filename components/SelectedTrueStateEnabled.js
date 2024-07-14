import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SelectedTrueStateEnabled = ({
  buildingBlockshourLine,
  hourText = "00",
  selectedTrueStateEnabledPosition,
  selectedTrueStateEnabledTop,
  selectedTrueStateEnabledLeft,
  selectedTrueStateEnabledWidth,
  selectedTrueStateEnabledHeight,
}) => {
  const selectedTrueStateEnabledStyle = useMemo(() => {
    return {
      ...getStyleValue("position", selectedTrueStateEnabledPosition),
      ...getStyleValue("top", selectedTrueStateEnabledTop),
      ...getStyleValue("left", selectedTrueStateEnabledLeft),
      ...getStyleValue("width", selectedTrueStateEnabledWidth),
      ...getStyleValue("height", selectedTrueStateEnabledHeight),
    };
  }, [
    selectedTrueStateEnabledPosition,
    selectedTrueStateEnabledTop,
    selectedTrueStateEnabledLeft,
    selectedTrueStateEnabledWidth,
    selectedTrueStateEnabledHeight,
  ]);

  return (
    <View
      style={[
        styles.selectedtrueStateenabled,
        styles.containerFlexBox,
        selectedTrueStateEnabledStyle,
      ]}
    >
      <Image
        style={styles.buildingBlockshourLineIcon}
        contentFit="cover"
        source={buildingBlockshourLine}
      />
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
  buildingBlockshourLineIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
  hour: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.robotoRegular,
    color: Color.backgroundDefaultDefault,
    textAlign: "center",
  },
  stateLayer: {
    height: 48,
    width: 48,
  },
  container: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDarkslateblue,
    zIndex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  selectedtrueStateenabled: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    width: 48,
  },
});

export default SelectedTrueStateEnabled;
