import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { iTimer } from "../../types";
import Counter from "../components/Counter";
import RoundedButton from "../components/RoundedButton";

const Timer = ({ focusSubject }: iTimer) => {
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.counterSec}>
        <Counter minutes={minutes} isStarted={isStarted} setIsStarted={setIsStarted} />
      </View>
      <View style={styles.textSec}>
        <Text style={styles.text}>Currently focusing on: </Text>
        <Text style={styles.text}>{focusSubject}</Text>
      </View>
      <View style={styles.controlSec}>
        <RoundedButton size={150} title={isStarted ? "PAUSE" : "START"} onPress={() => setIsStarted(!isStarted) } />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03022F",
    paddingVertical: 50,
  },
  counterSec:{
    paddingTop: 80,
    alignItems: "center",
    flex: 1
  },
  textSec: {
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  controlSec: {
    padding: 20,
    alignItems: "center",
  }
});
