import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundFalse from "./BackgroundFalse";
import CalendarIcon from "./CalendarIcon";
import FrameComponent from "./FrameComponent";
import SelectedFalseStateEnabled from "./SelectedFalseStateEnabled";
import SelectedTrueStateEnabled from "./SelectedTrueStateEnabled";
import Selectedtrue from "./Selectedtrue";
import StyleTextStateenabledSho from "./StyleTextStateenabledSho";
import AMPMFalseStateHovered from "./AMPMFalseStateHovered";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SelectTimer = () => {
  return (
    <View style={styles.selectTimer}>
      <BackgroundFalse
        backgroundFalsePosition="absolute"
        backgroundFalseTop={0}
        backgroundFalseRight={0}
        backgroundFalseBottom={798}
        backgroundFalseLeft={0}
      />
      <Image
        style={styles.selectTimerChild}
        contentFit="cover"
        source={require("../assets/frame-230.png")}
      />
      <Image
        style={styles.selectTimerItem}
        contentFit="cover"
        source={require("../assets/frame-231.png")}
      />
      <CalendarIcon />
      <FrameComponent
        frame465={require("../assets/frame-4651.png")}
        frame468={require("../assets/frame-4681.png")}
        propLeft={26}
      />
      <LinearGradient
        style={styles.clockFace12HourParent}
        locations={[0, 1, 1]}
        colors={[
          "rgba(255, 255, 255, 0.4)",
          "rgba(255, 255, 255, 0)",
          "rgba(255, 255, 255, 0)",
        ]}
      >
        <View style={styles.clockFace12Hour}>
          <Image
            style={styles.centerEllipseIcon}
            contentFit="cover"
            source={require("../assets/center-ellipse.png")}
          />
          <SelectedFalseStateEnabled
            hourText="12"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={2}
            selectedFalseStateEnabledLeft={104}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="11"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={16}
            selectedFalseStateEnabledLeft={54}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="10"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={54}
            selectedFalseStateEnabledLeft={16}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="9"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={104}
            selectedFalseStateEnabledLeft={2}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="8"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={154}
            selectedFalseStateEnabledLeft={16}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedTrueStateEnabled
            buildingBlockshourLine={require("../assets/building-blockshourline.png")}
            hourText="7"
            selectedTrueStateEnabledPosition="absolute"
            selectedTrueStateEnabledTop={187}
            selectedTrueStateEnabledLeft={60}
            selectedTrueStateEnabledWidth={48}
            selectedTrueStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="6"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={206}
            selectedFalseStateEnabledLeft={104}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="5"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={192}
            selectedFalseStateEnabledLeft={154}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="4"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={154}
            selectedFalseStateEnabledLeft={192}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="3"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={104}
            selectedFalseStateEnabledLeft={206}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="2"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={54}
            selectedFalseStateEnabledLeft={192}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="1"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={16}
            selectedFalseStateEnabledLeft={154}
            selectedFalseStateEnabledHeight={48}
          />
        </View>
        <View style={[styles.timePickerInputs, styles.separatorFlexBox]}>
          <Selectedtrue
            timeSelectorLabelText="7"
            selectedtruePosition="unset"
            selectedtrueBorderRadius={8}
            selectedtrueWidth={79}
            selectedtrueHeight={51}
            selectedtrueBackgroundColor="unset"
          />
          <Text style={[styles.separator, styles.separatorFlexBox]}>:</Text>
          <Selectedtrue
            timeSelectorLabelText="00"
            selectedtruePosition="unset"
            selectedtrueBorderRadius={8}
            selectedtrueWidth={79}
            selectedtrueHeight={51}
            selectedtrueBackgroundColor="#4f4f4f"
          />
        </View>
        <View style={[styles.container, styles.actionsPosition]}>
          <View style={[styles.stateLayer, styles.separatorFlexBox]}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={[styles.actions, styles.actionsPosition]}>
          <StyleTextStateenabledSho
            labelText="Cancel"
            styleTextStateenabledShoPosition="unset"
            styleTextStateenabledShoMarginLeft="unset"
          />
          <StyleTextStateenabledSho
            labelText="OK"
            styleTextStateenabledShoPosition="unset"
            styleTextStateenabledShoMarginLeft={8}
          />
        </View>
        <AMPMFalseStateHovered
          aMPMFalseStateHoveredPosition="absolute"
          aMPMFalseStateHoveredWidth={46}
          aMPMFalseStateHoveredHeight={65}
          aMPMFalseStateHoveredTop={274}
          aMPMFalseStateHoveredRight={-9}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  separatorFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  actionsPosition: {
    left: 45,
    flexDirection: "row",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  selectTimerChild: {
    top: 69,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  selectTimerItem: {
    top: 156,
    left: 29,
    width: 335,
    height: 34,
    position: "absolute",
  },
  centerEllipseIcon: {
    height: "3.14%",
    width: "3.14%",
    top: "48.43%",
    right: "48.41%",
    bottom: "48.43%",
    left: "48.45%",
    maxWidth: "100%",
    maxHeight: "100%",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
  },
  clockFace12Hour: {
    marginLeft: 85.5,
    top: 47,
    left: "50%",
    borderRadius: Border.br_481xl,
    width: 271,
    height: 242,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
    backgroundColor: Color.backgroundDefaultDefault,
  },
  separator: {
    fontSize: FontSize.size_38xl,
    lineHeight: 64,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDimgray,
    textAlign: "center",
    display: "flex",
    height: 80,
    width: 24,
  },
  timePickerInputs: {
    top: 74,
    left: 458,
    height: 256,
    flexDirection: "row",
    alignItems: "center",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  icon: {
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  stateLayer: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    top: 33,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  actions: {
    top: 229,
  },
  clockFace12HourParent: {
    top: 580,
    left: 14,
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 3.5,
    width: 399,
    height: 366,
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
  },
  selectTimer: {
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.backgroundDefaultDefault,
  },
});

export default SelectTimer;
