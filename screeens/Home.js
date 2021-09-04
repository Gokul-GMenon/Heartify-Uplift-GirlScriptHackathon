import React from "react";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "@use-expo/font";
import Navbar from "../Components/Navbar";
const Home = ({ navigation }) => {
  const [isLoaded] = useFonts({
    kumbhLight: require("../assets/fonts/KumbhSans-Light.ttf"),
    kumbhmedium: require("../assets/fonts/KumbhSans-Medium.ttf"),
    kumbhregular: require("../assets/fonts/KumbhSans-Regular.ttf"),
    kumbhSemiBold: require("../assets/fonts/KumbhSans-SemiBold.ttf"),
    kumbhBold: require("../assets/fonts/KumbhSans-Bold.ttf"),
  });

  if (!isLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F3F4FB",
        }}
      >
        <StatusBar backgroundColor="#F3F4FB" barStyle="dark-content" />

        <Text
          style={{
            fontSize: 25,
          }}
        >
          Loading
        </Text>
      </View>
    );
  } else {
    return (
      <>
        <Navbar navigation={navigation} />
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#F3F4FB",
            paddingLeft: 15,
            paddingRight: 15,
            zIndex: 0,
          }}
        >
          <StatusBar backgroundColor="#F3F4FB" barStyle="dark-content" />

          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-start",

              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "kumbhBold",
                fontSize: RFValue(25),
                letterSpacing: -0.03,
                color: "rgba(0, 129, 247, 0.8)",
                lineHeight: 30,
              }}
            >
              <Text
                style={{
                  opacity: 0.8,
                }}
              >
                Heart
              </Text>
              ify
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
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "kumbhBold",
              color: "#5B6473",
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            Hi 👋
          </Text>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: "#ffff",
              flexDirection: "row",
              elevation: 0.2,
              padding: 11,
              marginTop: 10,
            }}
          >
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
                  fontSize: RFValue(15),
                  fontFamily: "kumbhBold",
                  color: "#5B6473",
                  lineHeight: 22,
                  marginBottom: 7,
                }}
              >
                Your Personal Heart Partner
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "kumbhregular",
                  color: "#B7C3D0",
                  lineHeight: 22,
                  marginBottom: 7,
                }}
              >
                Systolic pressure is the top number. It tells you the sure of
                blood flow on your
              </Text>
            </View>
            <Image
              style={{
                right: 0,
                height: 150,

                resizeMode: "contain",
                width: 130,
              }}
              source={require(`../assets/img/Medicine-bro.png`)}
            />
          </View>

          <View
            style={{
              borderRadius: 6,
              backgroundColor: "#ffff",
              flexDirection: "row",
              elevation: 0.2,
              padding: 11,
              marginTop: 25,
            }}
          >
            <Image
              style={{
                right: 0,
                height: 160,

                resizeMode: "contain",
                width: 140,
              }}
              source={require(`../assets/img/girlWalking.png`)}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(11),
                  textAlign: "right",
                  fontFamily: "kumbhBold",
                  color: "#B7C3D0",
                }}
              >
                Todays Steps
              </Text>
              <Text
                style={{
                  fontSize: RFValue(24),
                  fontFamily: "kumbhBold",
                  color: "#5B6473",
                  margin: 0,
                  textAlign: "right",

                  lineHeight: 30,
                }}
              >
                4658
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  textAlign: "right",
                  fontFamily: "kumbhregular",
                  color: "#B7C3D0",
                  lineHeight: 18,
                  marginBottom: 7,
                  width: "85%",
                }}
              >
                5430 Steps away from daily Goal
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  backgroundColor: "#0081F7",
                  padding: 10,
                  paddingRight: 14,
                  paddingLeft: 14,
                  flexDirection: "row",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(11),

                    fontFamily: "kumbhBold",
                    color: "#fff",
                    lineHeight: 22,

                    marginRight: 10,
                  }}
                >
                  Go For A Walk
                </Text>
                <Icon
                  style={{
                    margin: 0,
                  }}
                  name="arrow-forward-outline"
                  type="ionicon"
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.push("food")}
            style={{
              borderRadius: 6,
              backgroundColor: "#ffff",
              flexDirection: "row",
              elevation: 0.2,
              padding: 11,
              marginTop: 55,
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
                backgroundColor: " rgba(0, 230, 118, 0.2)",
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
                name="bicycle"
                type="ionicon"
                color="#00E676"
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
                Good Exercise For
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

          <TouchableOpacity
            style={{
              borderRadius: 6,
              backgroundColor: "#ffff",
              flexDirection: "row",
              elevation: 0.2,
              padding: 11,
              marginTop: 15,
              marginBottom: 140,
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: "rgba(213, 0, 249, 0.2)",
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
                name="person"
                type="ionicon"
                color="#D500F9"
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
        </ScrollView>
      </>
    );
  }
};

export default Home;

const styles = StyleSheet.create({});
