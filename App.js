import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import CounterScreen from "./src/modules/counter/CounterScreen";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
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
