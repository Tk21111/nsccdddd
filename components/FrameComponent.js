import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({ frame465, frame468, propLeft }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <Image
        style={[styles.componentChild, styles.componentChildLayout]}
        contentFit="cover"
        source={frame465}
      />
      <Image
        style={[styles.componentItem, styles.componentChildLayout]}
        contentFit="cover"
        source={frame468}
      />
      <Image
        style={[styles.componentInner, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/frame-469.png")}
      />
      <Image
        style={[styles.frameIcon, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/frame-466.png")}
      />
      <Image
        style={[styles.componentChild1, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/frame-467.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentChildLayout: {
    height: 41,
    width: 123,
    overflow: "hidden",
    position: "absolute",
  },
  componentChild: {
    left: 30,
    width: 123,
    top: 34,
  },
  componentItem: {
    left: 180,
    top: 34,
  },
  componentInner: {
    top: 90,
    left: 181,
  },
  frameIcon: {
    top: 92,
    left: 30,
    width: 123,
  },
  componentChild1: {
    top: 150,
    left: 30,
    width: 123,
  },
  frameParent: {
    top: 609,
    left: 32,
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 3,
    width: 331,
    height: 225,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FrameComponent;
