import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "../Components/Navbar";

const Model1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <ScrollView>
        <Text>Hi</Text>
      </ScrollView>
    </View>
  );
};

export default Model1;

const styles = StyleSheet.create({});
