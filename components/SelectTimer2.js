import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundFalse from "./BackgroundFalse";
import FrameComponent from "./FrameComponent";
import Selectedtrue from "./Selectedtrue";
import SelectedFalseStateEnabled from "./SelectedFalseStateEnabled";
import SelectedTrueStateEnabled from "./SelectedTrueStateEnabled";
import StyleTextStateenabledSho from "./StyleTextStateenabledSho";
import AMPMFalseStateHovered from "./AMPMFalseStateHovered";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const SelectTimer2 = () => {
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
        style={[styles.selectTimerChild, styles.selectTimerChildPosition]}
        contentFit="cover"
        source={require("../assets/frame-230.png")}
      />
      <Image
        style={[styles.selectTimerItem, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../assets/frame-231.png")}
      />
      <Image
        style={[styles.calendarIcon, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../assets/calendar4.png")}
      />
      <FrameComponent
        frame465={require("../assets/frame-4651.png")}
        frame468={require("../assets/frame-468.png")}
        propLeft={26}
      />
      <LinearGradient
        style={[styles.timePickerInputsParent, styles.selectTimerChildPosition]}
        locations={[0, 1, 1]}
        colors={[
          "rgba(255, 255, 255, 0.4)",
          "rgba(255, 255, 255, 0)",
          "rgba(255, 255, 255, 0)",
        ]}
      >
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
            timeSelectorLabelText="20"
            selectedtruePosition="unset"
            selectedtrueBorderRadius={8}
            selectedtrueWidth={79}
            selectedtrueHeight={51}
            selectedtrueBackgroundColor="#4f4f4f"
          />
        </View>
        <View style={[styles.frame, styles.frameLayout]}>
          <SelectedFalseStateEnabled
            hourText="24"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={30}
            selectedFalseStateEnabledLeft={104}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="23"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={40}
            selectedFalseStateEnabledLeft={70}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="22"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={66}
            selectedFalseStateEnabledLeft={41}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="21"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={104}
            selectedFalseStateEnabledLeft={30}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedTrueStateEnabled
            buildingBlockshourLine={require("../assets/building-blockshourline1.png")}
            hourText="20"
            selectedTrueStateEnabledPosition="absolute"
            selectedTrueStateEnabledTop={141}
            selectedTrueStateEnabledLeft={41}
            selectedTrueStateEnabledWidth={48}
            selectedTrueStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="19"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={166}
            selectedFalseStateEnabledLeft={70}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="18"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={178}
            selectedFalseStateEnabledLeft={104}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="17"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={159}
            selectedFalseStateEnabledLeft={142}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="16"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={141}
            selectedFalseStateEnabledLeft={172}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="15"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={104}
            selectedFalseStateEnabledLeft={177}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="14"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={66}
            selectedFalseStateEnabledLeft={168}
            selectedFalseStateEnabledHeight={48}
          />
          <SelectedFalseStateEnabled
            hourText="13"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={40}
            selectedFalseStateEnabledLeft={141}
            selectedFalseStateEnabledHeight={48}
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
          <SelectedFalseStateEnabled
            hourText="7"
            selectedFalseStateEnabledPosition="absolute"
            selectedFalseStateEnabledTop={192}
            selectedFalseStateEnabledLeft={54}
            selectedFalseStateEnabledHeight={48}
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
          <Image
            style={[styles.centerEllipseIcon, styles.selectTimerChildPosition]}
            contentFit="cover"
            source={require("../assets/center-ellipse1.png")}
          />
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
        </View>
        <AMPMFalseStateHovered
          aMPMFalseStateHoveredPosition="absolute"
          aMPMFalseStateHoveredWidth={46}
          aMPMFalseStateHoveredHeight={65}
          aMPMFalseStateHoveredTop={281}
          aMPMFalseStateHoveredRight={-18}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  selectTimerChildPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  calendarIconPosition: {
    top: 156,
    position: "absolute",
  },
  separatorFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    height: 256,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  actionsPosition: {
    top: 228,
    flexDirection: "row",
    position: "absolute",
  },
  selectTimerChild: {
    top: 69,
    left: 0,
    width: 375,
    height: 45,
  },
  selectTimerItem: {
    left: 29,
    width: 335,
    height: 34,
  },
  calendarIcon: {
    left: 27,
    width: 338,
    height: 292,
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
    top: 82,
    left: 467,
    flexDirection: "row",
    alignItems: "center",
    height: 256,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  centerEllipseIcon: {
    height: "3.13%",
    width: "3.13%",
    top: "48.44%",
    right: "48.44%",
    bottom: "48.44%",
    left: "48.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
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
    left: -14,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  actions: {
    left: 190,
  },
  frame: {
    marginLeft: 87.5,
    top: 55,
    left: "50%",
    borderRadius: Border.br_481xl,
    width: 256,
    backgroundColor: Color.backgroundDefaultDefault,
  },
  timePickerInputsParent: {
    top: 586,
    left: 12,
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
  },
  selectTimer: {
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.backgroundDefaultDefault,
  },
});

export default SelectTimer2;
