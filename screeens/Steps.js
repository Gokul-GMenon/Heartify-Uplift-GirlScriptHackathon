import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import Navbar from "../Components/Navbar";
import Svg, { Path } from "react-native-svg";

import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PedometerView from "../Components/pedometer";

const Steps = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F3F4FB",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar navigation={navigation} />

      <Text
        style={{
          fontSize: RFValue(15),
          textAlign: "center",
        }}
      >
        Developed on Hack-o-lift by GirlsScript Foundation
      </Text>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({});
