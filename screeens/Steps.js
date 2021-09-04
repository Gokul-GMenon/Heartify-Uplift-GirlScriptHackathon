import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import Navbar from "../Components/Navbar";
import Svg, { Path } from "react-native-svg";

import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PedometerView from "../Components/pedometer";

const Steps = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0081F7" barStyle="light-content" />
      <Navbar navigation={navigation} />
      <ScrollView>
        <Svg
          style={{
            marginTop: -60,
          }}
          width={Dimensions.get("window").width}
          height="275em"
          viewBox="0 0 1188 653"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M.5 0h1187v565.66c-463.549 111.72-723.451 121.092-1187 0V0z"
            fill="#0081F7"
          />
        </Svg>

        <View
          style={{
            alignSelf: "center",
            position: "absolute",
            top: 45,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(25),
                fontFamily: "kumbhBold",
                color: "#fff",
              }}
            >
              Track
            </Text>
            <Text
              style={{
                fontSize: RFValue(25),
                fontFamily: "kumbhLight",
                color: "#fff",
              }}
            >
              Steps
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: RFValue(15),
              fontFamily: "kumbhregular",

              textAlign: "center",
            }}
          >
            It is recommended to walk {"\n"}10000 steps a day
          </Text>
        </View>
        <PedometerView />
      </ScrollView>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({});
