import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Navbar from "../Components/Navbar";
const success = ({ navigation }) => {
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
          fontSize: RFValue(45),
        }}
      >
        😫
      </Text>
      <Text
        style={{
          fontSize: RFValue(45),
          fontFamily: "kumbhBold",
          fontSize: RFValue(15),
          letterSpacing: -0.03,
          color: "rgba(0, 129, 247, 0.8)",
          lineHeight: 20,
          textAlign: "center",
          width: "70%",
          marginTop: 6,
        }}
      >
        It looks like you have some cardiovascular issues. We recommend you to
        take care of your health and visit a cardiologist.
      </Text>
    </View>
  );
};

export default success;

const styles = StyleSheet.create({});
