import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screeens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Model1 from "./screeens/Model1";
import FoodList from "./screeens/FoodList";
import FoodListRead from "./screeens/FoodListRead";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Model1"
          component={Model1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="food"
          component={FoodList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="foodData"
          component={FoodListRead}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
