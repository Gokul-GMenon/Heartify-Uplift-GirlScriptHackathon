import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Navbar from "../Components/Navbar";
import { RFValue } from "react-native-responsive-fontsize";

const FoodListRead = ({ navigation, route }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    setData(route.params.item);
  }, [route]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F3F4FB",
      }}
    >
      <Navbar navigation={navigation} />
      <ScrollView
        style={{
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "kumbhBold",
              fontSize: RFValue(22),
              letterSpacing: -0.03,
              color: "rgba(0, 129, 247, 0.8)",
              lineHeight: 30,
            }}
          >
            Heartify
          </Text>
          <Text
            style={{
              color: "#5B6473",
              fontFamily: "kumbhBold",
              fontSize: RFValue(30),
              lineHeight: 35,
            }}
          >
            FOODS
          </Text>
          <Text
            style={{
              lineHeight: 15,
              fontSize: RFValue(12),
              color: "#B7C3D0",
              fontFamily: "kumbhregular",
            }}
          >
            It’s all about your Heart
          </Text>
        </View>

        <TouchableOpacity
          style={{
            borderRadius: 6,
            backgroundColor: "#ffff",
            flexDirection: "row",
            elevation: 0.2,
            padding: 11,
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "rgba(255, 64, 129, 0.2)",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              size={50}
              style={{
                margin: 0,
              }}
              name="leaf"
              type="ionicon"
              color="#FF4081"
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginLeft: 8,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "kumbhBold",
                color: "#5B6473",
                lineHeight: 18,
                marginBottom: 7,
              }}
            >
              Good Food For
              {"\n"} Heart
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "kumbhregular",
                color: "#B7C3D0",

                marginBottom: 7,
              }}
            >
              Systolic pressure is the top
            </Text>
          </View>
        </TouchableOpacity>
        {data ? (
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",

              borderRadius: 5,
              elevation: 0.2,
              marginBottom: 15,
              marginTop: 40,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(50),
                  marginTop: -35,
                }}
              >
                {data.image}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "kumbhBold",
                  color: "#5B6473",

                  marginLeft: 5,
                }}
              >
                {data.name}
              </Text>
            </View>
            <Text
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                fontSize: RFValue(15),
                fontFamily: "kumbhregular",
                color: "#B7C3D0",
                lineHeight: 22,
                marginBottom: 7,
                marginTop: 5,
              }}
            >
              {data.desc}
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default FoodListRead;

const styles = StyleSheet.create({});
