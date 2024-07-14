import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BackgroundFalse = ({
  backgroundFalsePosition,
  backgroundFalseTop,
  backgroundFalseRight,
  backgroundFalseBottom,
  backgroundFalseLeft,
}) => {
  const backgroundFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", backgroundFalsePosition),
      ...getStyleValue("top", backgroundFalseTop),
      ...getStyleValue("right", backgroundFalseRight),
      ...getStyleValue("bottom", backgroundFalseBottom),
      ...getStyleValue("left", backgroundFalseLeft),
    };
  }, [
    backgroundFalsePosition,
    backgroundFalseTop,
    backgroundFalseRight,
    backgroundFalseBottom,
    backgroundFalseLeft,
  ]);

  return (
    <View>
      <View style={[styles.time, styles.timePosition]}>
        <Text style={styles.time1}>9:41</Text>
      </View>
      <View style={[styles.levels, styles.timePosition]}>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Image
          style={[styles.wifiIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.cellularConnectionIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    width: "35.75%",
    marginTop: -27,
    position: "absolute",
    height: 54,
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "36.94%",
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    color: Color.labelsPrimary,
    textAlign: "center",
    position: "absolute",
  },
  time: {
    right: "64.25%",
    left: "0%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.labelsPrimary,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.75,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.55,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.25,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "0%",
    left: "64.25%",
  },
});

export default BackgroundFalse;
