import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Navbar from "../Components/Navbar";

import { RFValue } from "react-native-responsive-fontsize";
import { RadioButton } from "react-native-paper";
const Model2 = ({ navigation }) => {
  const [sex, setsexRadioButtons] = useState("");
  const [anaemia, setanaemia] = useState("");
  const [diabeties, setdiabeties] = useState("");
  const [BP, setBP] = useState("");
  const [smoking, setsmoking] = useState("");
  const [input, setInput] = useState({
    age: 0,
    ejf: 0,
    plt: 0,
    sers: 0,
    serNa: 0,
    crph: 0,
  });
  function ToastShow(mssg) {
    ToastAndroid.showWithGravityAndOffset(
      mssg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  function getData() {
    if (!input.age) {
      ToastShow("Please Add Your age!");
    } else if (!sex) {
      ToastShow("Please Add Your Sex!");
    } else if (!anaemia) {
      ToastShow("PleaseFill anaemia Fields!");
    } else if (!diabeties) {
      ToastShow("PleaseFill diabeties Fields!");
    } else if (!BP) {
      ToastShow("PleaseFill BP Fields!");
    } else if (!smoking) {
      ToastShow("PleaseFill BP smoking!");
    } else if (
      !(
        input.age ||
        input.ejf ||
        input.plt ||
        input.sers ||
        input.plt ||
        input.serNa ||
        input.crph
      )
    ) {
      ToastShow("Please Fill all Fields!");
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <ScrollView
        style={{
          paddingLeft: 15,
          backgroundColor: "#F3F4FB",
          paddingRight: 15,
        }}
      >
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
            fontSize: RFValue(15),
            fontFamily: "kumbhBold",
            color: "#5B6473",
            lineHeight: 22,
            marginBottom: 7,
            marginTop: 30,
          }}
        >
          For Laboratory Use
        </Text>
        <View
          style={{
            borderRadius: 6,
            backgroundColor: "#ffff",
            flexDirection: "column",
            elevation: 0.2,
            padding: 11,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <Text style={styles.text}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Your age"
              keyboardType="numeric"
              onChangeText={(value) => setInput({ ...input, age: value })}
            />
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <Text style={styles.text}>Sex</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Male</Text>
                <RadioButton
                  color="#0081F7"
                  value="male"
                  status={sex === "male" ? "checked" : "unchecked"}
                  onPress={() => setsexRadioButtons("male")}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Female</Text>
                <RadioButton
                  color="#0081F7"
                  value="female"
                  status={sex === "female" ? "checked" : "unchecked"}
                  onPress={() => setsexRadioButtons("female")}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderRadius: 6,
            backgroundColor: "#ffff",
            flexDirection: "column",
            elevation: 0.2,
            padding: 11,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <Text style={styles.text}>Anaemia</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Yes</Text>
                <RadioButton
                  color="#0081F7"
                  value={1}
                  status={anaemia === 1 ? "checked" : "unchecked"}
                  onPress={() => setanaemia(1)}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>NO</Text>
                <RadioButton
                  color="#0081F7"
                  value={0}
                  status={anaemia === 0 ? "checked" : "unchecked"}
                  onPress={() => setanaemia(0)}
                />
              </View>
            </View>

            <Text style={styles.text}>Diabetes</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Yes</Text>
                <RadioButton
                  color="#0081F7"
                  value={1}
                  status={diabeties === 1 ? "checked" : "unchecked"}
                  onPress={() => setdiabeties(1)}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>NO</Text>
                <RadioButton
                  color="#0081F7"
                  value={0}
                  status={diabeties === 0 ? "checked" : "unchecked"}
                  onPress={() => setdiabeties(0)}
                />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 8,
              }}
            >
              <Text style={styles.text}>Ejection Fraction</Text>
              <TextInput
                style={styles.input}
                placeholder="Ejection Fraction"
                keyboardType="numeric"
                onChangeText={(value) => setInput({ ...input, ejf: value })}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            borderRadius: 6,
            backgroundColor: "#ffff",
            flexDirection: "column",
            elevation: 0.2,
            padding: 11,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <Text style={styles.text}>High BP</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Yes</Text>
                <RadioButton
                  color="#0081F7"
                  value={1}
                  status={BP === 1 ? "checked" : "unchecked"}
                  onPress={() => setBP(1)}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>NO</Text>
                <RadioButton
                  color="#0081F7"
                  value={0}
                  status={BP === 0 ? "checked" : "unchecked"}
                  onPress={() => setBP(0)}
                />
              </View>
            </View>
            <Text style={styles.text}>Smoking</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Yes</Text>
                <RadioButton
                  color="#0081F7"
                  value={1}
                  status={smoking === 1 ? "checked" : "unchecked"}
                  onPress={() => setsmoking(1)}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>NO</Text>
                <RadioButton
                  color="#0081F7"
                  value={0}
                  status={smoking === 0 ? "checked" : "unchecked"}
                  onPress={() => setsmoking(0)}
                />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 8,
              }}
            >
              <Text style={styles.text}>Platelets</Text>
              <TextInput
                style={styles.input}
                placeholder="Platelets k"
                keyboardType="numeric"
                onChangeText={(value) => setInput({ ...input, plt: value })}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            borderRadius: 6,
            backgroundColor: "#ffff",
            flexDirection: "column",
            elevation: 0.2,
            padding: 11,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <View
              style={{
                width: "100%",
                marginTop: 8,
              }}
            >
              <Text style={styles.text}>Serum Creatinine</Text>
              <TextInput
                style={styles.input}
                placeholder="Serum Creatinine .5 to 9.4"
                keyboardType="numeric"
                onChangeText={(value) => setInput({ ...input, sers: value })}
              />
            </View>

            <View
              style={{
                width: "100%",
                marginTop: 8,
              }}
            >
              <Text style={styles.text}>Creatinine Phosphokinase</Text>
              <TextInput
                style={styles.input}
                placeholder="Creatinine Phosphokinase value 23 to 7861"
                keyboardType="numeric"
                onChangeText={(value) => setInput({ ...input, crph: value })}
              />
            </View>

            <View
              style={{
                width: "100%",
                marginTop: 8,
              }}
            >
              <Text style={styles.text}>Serum Sodium</Text>
              <TextInput
                style={styles.input}
                placeholder="Serum Sodium value 113 to 148"
                keyboardType="numeric"
                onChangeText={(value) => setInput({ ...input, serNa: value })}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => getData()}
          style={{
            marginTop: 5,
            backgroundColor: "#0081F7",
            padding: 10,
            paddingRight: 14,
            paddingLeft: 14,
            flexDirection: "row",
            borderRadius: 4,
            marginBottom: 200,
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            alignSelf: "center",
            marginTop: 40,
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
            Evaluate
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
      </ScrollView>
    </View>
  );
};

export default Model2;

const styles = StyleSheet.create({
  input: {
    margin: 8,
    borderWidth: 1,
    padding: 11,
    width: "70%",
    borderColor: "rgba(0, 129, 247, 0.13)",
    fontFamily: "kumbhregular",
  },
  text: {
    marginLeft: 8,
    color: "#5B6473",
    fontFamily: "kumbhSemiBold",
    fontSize: RFValue(14),
    marginTop: 5,
  },
  radioText: {
    fontFamily: "kumbhregular",
    fontSize: RFValue(14),
    color: "#5B6473",
  },
});
