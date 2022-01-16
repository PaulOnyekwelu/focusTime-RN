import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { iFocus } from "../../types";
import FocusHistory from "../components/FocusHistory";
import RoundedButton from "../components/RoundedButton";

const Focus = ({ setFocusSubject, focusHistory, clearHistory }: iFocus) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>What would you like to focus on?</Text>
        <View style={styles.inputSec}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <RoundedButton
            title="+"
            size={60}
            onPress={() => setFocusSubject(inputValue)}
          />
        </View>
      </View>
      {focusHistory && FocusHistory.length > 0 && (
        <FocusHistory clearHistory={clearHistory} focusHistory={focusHistory} />
      )}
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03022F",
    paddingTop: 40,
  },
  content: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputSec: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
    fontSize: 25,
    paddingHorizontal: 5,
  },
});
