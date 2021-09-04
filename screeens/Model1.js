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
const Model1 = ({ navigation }) => {
  const [sex, setsexRadioButtons] = useState("");
  const [fds, setfdsRadioButtons] = useState("");
  const [angina, setanginaRadioButtons] = useState("");
  const [cppain, setcppainRadioButtons] = useState("");
  const [cholestrol, setcholestrolRadioButtons] = useState("");
  const [heartrate, setheartrate] = useState("");
  const [stSlop, setstslopeRadioButtons] = useState("");
  const [input, setInput] = useState({
    age: 0,
    rbp: 0,
    heartrate: 0,
    std: 0,
    cholestrol: 0,
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
      ToastShow("Please Add your Gender!");
    } else if (!input.rbp) {
      ToastShow("Please Add Resting Blood Pressure!");
    } else if (!fds) {
      ToastShow("Please Add fasting blood Pressure!");
    } else if (!input.heartrate && !heartrate) {
      ToastShow("Please Add Heart rate!");
    } else if (!input.cholestrol && !cholestrol) {
      ToastShow("Please Add Cholestrol data!");
    } else if (!angina) {
      ToastShow("Please Add data of Angina!");
    } else if (!cppain) {
      ToastShow("Please Add Chest Pain Type!");
    } else {
      const data = {
        age: input.age,
        "resting bp": input.rbp,
        cholestrol: input.cholestrol ? input.cholestrol : cholestrol,
        "fasting blood sugar": fds,
        "max heart rate": input.heartrate ? input.heartrate : heartrate,
        "exercise induced anigna": angina,
        sex: sex,
        "chest pain type": cppain,
        "st slope": stSlop,
        "st depression": input.std,
      };
      console.log(data);
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
          Section Heading
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
            <Text style={styles.text}>Resting Blood Pressure</Text>
            <TextInput
              style={styles.input}
              placeholder="Your age"
              keyboardType="numeric"
              onChangeText={(value) => setInput({ ...input, rbp: value })}
            />
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <Text style={styles.text}>Fasting Blood Sugar</Text>
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
                <Text style={styles.radioText}>High</Text>
                <RadioButton
                  color="#0081F7"
                  value="high"
                  status={fds === "high" ? "checked" : "unchecked"}
                  onPress={() => setfdsRadioButtons("high")}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Low</Text>
                <RadioButton
                  color="#0081F7"
                  value="low"
                  status={fds === "low" ? "checked" : "unchecked"}
                  onPress={() => setfdsRadioButtons("low")}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 8,
            }}
          >
            <Text style={styles.text}>Max Heart Rate</Text>

            <TextInput
              style={styles.input}
              placeholder="Heart Rate"
              keyboardType="numeric"
              onChangeText={(value) => setInput({ ...input, heartrate: value })}
            />
            <Text
              style={{
                ...styles.radioText,
                marginLeft: 50,
              }}
            >
              Or
            </Text>
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
                <Text style={styles.radioText}>High</Text>
                <RadioButton
                  color="#0081F7"
                  value="high"
                  status={heartrate === "high" ? "checked" : "unchecked"}
                  onPress={() => setheartrate("high")}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Low</Text>
                <RadioButton
                  color="#0081F7"
                  value="low"
                  status={heartrate === "low" ? "checked" : "unchecked"}
                  onPress={() => setheartrate("low")}
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              ...styles.text,
              marginTop: 20,
            }}
          >
            Cholestrol
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Cholestrol"
            keyboardType="numeric"
            onChangeText={(value) => setInput({ ...input, cholestrol: value })}
          />
          <Text
            style={{
              ...styles.radioText,
              marginLeft: 50,
            }}
          >
            Or
          </Text>
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
              <Text style={styles.radioText}>High</Text>
              <RadioButton
                color="#0081F7"
                value="high"
                status={cholestrol === "high" ? "checked" : "unchecked"}
                onPress={() => setcholestrolRadioButtons("high")}
              />
            </View>

            <View
              style={{
                marginLeft: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.radioText}>Low</Text>
              <RadioButton
                color="#0081F7"
                value="low"
                status={cholestrol === "low" ? "checked" : "unchecked"}
                onPress={() => setcholestrolRadioButtons("low")}
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
            <Text style={styles.text}>Exercise Induced Angina</Text>
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
                  value="yes"
                  status={angina === "yes" ? "checked" : "unchecked"}
                  onPress={() => setanginaRadioButtons("yes")}
                />
              </View>

              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>No</Text>
                <RadioButton
                  color="#0081F7"
                  value="no"
                  status={angina === "no" ? "checked" : "unchecked"}
                  onPress={() => setanginaRadioButtons("no")}
                />
              </View>
            </View>

            <Text
              style={{
                ...styles.text,
                marginTop: 25,
              }}
            >
              Chest Pain Type
            </Text>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 12,
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Atypical</Text>
                <RadioButton
                  color="#0081F7"
                  value="Atypical"
                  status={cppain === "Atypical" ? "checked" : "unchecked"}
                  onPress={() => setcppainRadioButtons("male")}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Non Anignal</Text>
                <RadioButton
                  color="#0081F7"
                  value="non anignal"
                  status={cppain === "non anignal" ? "checked" : "unchecked"}
                  onPress={() => setcppainRadioButtons("non anignal")}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Typical</Text>
                <RadioButton
                  color="#0081F7"
                  value="typical"
                  status={cppain === "typical" ? "checked" : "unchecked"}
                  onPress={() => setcppainRadioButtons("typical")}
                />
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: RFValue(13),
            fontFamily: "kumbhBold",
            color: "#5B6473",
            lineHeight: 22,
            marginBottom: 7,
            marginTop: 30,
          }}
        >
          Optional Fields
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
            <Text style={styles.text}>St Slope</Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 12,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Flat</Text>
                <RadioButton
                  color="#0081F7"
                  value="flat"
                  status={stSlop === "flat" ? "checked" : "unchecked"}
                  onPress={() => setstslopeRadioButtons("flat")}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.radioText}>Not Flat</Text>
                <RadioButton
                  color="#0081F7"
                  value="not flat"
                  status={stSlop === "not flat" ? "checked" : "unchecked"}
                  onPress={() => setstslopeRadioButtons("not flat")}
                />
              </View>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                }}
                onPress={() => setstslopeRadioButtons("")}
              >
                <Text
                  style={{
                    color: "#5B6473",
                  }}
                >
                  Clear Selected
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 8,
              }}
            >
              <Text style={styles.text}>St Depression</Text>
              <TextInput
                style={styles.input}
                placeholder="St Deprssion"
                keyboardType="numeric"
                onChangeText={(value) => setInput({ ...input, std: value })}
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

export default Model1;

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
