import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>What would you like to focus on?</Text>
        <View style={styles.inputSec}>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03022F",
    paddingTop: 40
  },
  content: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  },
  inputSec: {
    flexDirection: "row",
    padding: 15
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    height: 70,
    borderRadius: 5
  }
});
