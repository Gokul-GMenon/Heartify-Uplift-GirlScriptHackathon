import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Icon } from "react-native-elements";
const Navbar = () => {
  return (
    <View
      style={{
        position: "absolute",

        backgroundColor: "red",
        bottom: 0,
        width: "100%",
        zIndex: 1000,
        height: 80,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 6,
        alignItems: "center",
      }}
    >
      <TouchableWithoutFeedback>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,
            backgroundColor: "rgba(0, 129, 247, 0.13)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            size={30}
            style={{
              margin: 0,
            }}
            name="home"
            type="ionicon"
            color="#0081F7"
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            size={30}
            style={{
              margin: 0,
            }}
            name="fitness-outline"
            type="ionicon"
            color="#B7C3D0"
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            size={30}
            style={{
              margin: 0,
            }}
            name="water-outline"
            type="ionicon"
            color="#B7C3D0"
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            size={30}
            style={{
              margin: 0,
            }}
            name="compass-outline"
            type="ionicon"
            color="#B7C3D0"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
