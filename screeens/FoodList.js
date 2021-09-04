import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "react-native-elements";
import Navbar from "../Components/Navbar";
import { RFValue } from "react-native-responsive-fontsize";
const FoodList = ({ navigation }) => {
  const foodData = [
    {
      name: `Tuna \nSteak`,
      id: "hsghgsds",
      image: "🥙",
      desc: "Lorem ipsum dolor sit amet ,consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua",
      color: "rgba(253, 242, 142, 0.2)",
    },
    {
      name: `Spaghetti`,
      id: "hsghgssds",
      image: "🌮",
      desc: "Lorem ipsum dolor sit amet ,consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua",
      color: "rgba(178, 253, 142, 0.2)",
    },
    {
      name: `Spaghetti`,
      id: "hsghgsssds",
      image: "🌮",
      desc: "Lorem ipsum dolor sit amet ,consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua",
      color: "rgba(178, 153, 142, 0.2)",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F3F4FB",
      }}
    >
      <Navbar navigation={navigation} />
      <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          {foodData.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push("foodData", {
                    item: item,
                  })
                }
                key={item.id}
                style={{
                  backgroundColor: "#fff",
                  width: "48%",
                  marginLeft: (index + 1) % 2 == 0 ? 3 : 0,
                  borderRadius: 5,
                  elevation: 0.2,
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      backgroundColor: item.color,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(30),
                      }}
                    >
                      {item.image}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "kumbhBold",
                      color: "#5B6473",
                      lineHeight: 16,
                      marginLeft: 5,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <Text
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    fontSize: RFValue(12),
                    fontFamily: "kumbhregular",
                    color: "#B7C3D0",
                    lineHeight: 15,
                    marginBottom: 7,
                  }}
                >
                  {item.desc}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
