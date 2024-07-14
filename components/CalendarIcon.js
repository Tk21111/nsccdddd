import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const CalendarIcon = () => {
  return (
    <Image
      style={styles.calendarIcon}
      contentFit="cover"
      source={require("../assets/calendar2.png")}
    />
  );
};

const styles = StyleSheet.create({
  calendarIcon: {
    position: "absolute",
    top: 156,
    left: 27,
    width: 338,
    height: 292,
  },
});

export default CalendarIcon;
