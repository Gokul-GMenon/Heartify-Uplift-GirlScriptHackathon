import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Icon } from "react-native-elements";
import { useRoute } from "@react-navigation/native";

const Navbar = ({ navigation }) => {
  const [screen, SetScreen] = useState("Home");
  const route = useRoute().name;

  useEffect(() => {
    SetScreen(route);
  }, [route]);
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
      <TouchableWithoutFeedback
        onPress={() => {
          if (screen !== "Home") {
            navigation.push("Home");
          }
        }}
      >
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,
            backgroundColor:
              screen === "Home" || screen === "foodData" || screen === "food"
                ? "rgba(0, 129, 247, 0.13)"
                : "#fff",
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
            type="ionicon"
            name={
              screen === "Home" || screen === "foodData" || screen === "food"
                ? "home"
                : "home-outline"
            }
            color={
              screen === "Home" || screen === "foodData" || screen === "food"
                ? "#0081F7"
                : "#B7C3D0"
            }
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          if (screen !== "Model1") {
            navigation.push("Model1");
          }
        }}
      >
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,
            backgroundColor:
              screen === "Model1" ? "rgba(0, 129, 247, 0.13)" : "#fff",
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
            type="ionicon"
            name={screen === "Model1" ? "fitness" : "fitness-outline"}
            color={screen === "Model1" ? "#0081F7" : "#B7C3D0"}
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

      <TouchableWithoutFeedback
        onPress={() => {
          if (screen !== "steps") {
            navigation.push("steps");
          }
        }}
      >
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 55 / 2,
            backgroundColor:
              screen === "steps" ? "rgba(0, 129, 247, 0.13)" : "#fff",
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
            name={screen === "steps" ? "walk" : "walk-outline"}
            type="ionicon"
            color={screen === "steps" ? "#0081F7" : "#B7C3D0"}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
