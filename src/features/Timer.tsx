import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { iTimer } from "../../types";
import Counter from "../components/Counter";
import CustomProgressBar from "../components/CustomProgressBar";
import RoundedButton from "../components/RoundedButton";

const Timer = ({ focusSubject, setFocusSubject }: iTimer) => {
  const [minutes, setMinutes] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.counterSec}>
        <Counter
          minutes={minutes}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          setProgress={setProgress}
        />
      </View>
      <CustomProgressBar progress={progress} />
      <View style={styles.textSec}>
        <Text style={styles.text}>Currently focusing on: </Text>
        <Text style={styles.text}>{focusSubject}</Text>
      </View>
      <View style={styles.controlSec}>
        <View style={styles.setTimeSec}>
          <RoundedButton size={50} title="1" onPress={() => setMinutes(1)} />
          <RoundedButton size={50} title="5" onPress={() => setMinutes(5)} />
          <RoundedButton size={50} title="10" onPress={() => setMinutes(10)} />
          <RoundedButton size={50} title="20" onPress={() => setMinutes(20)} />
        </View>
        <RoundedButton
          size={150}
          title={isStarted ? "PAUSE" : "START"}
          onPress={() => setIsStarted(!isStarted)}
        />
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
  counterSec: {
    paddingTop: 80,
    alignItems: "center",
    flex: 1,
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
  },
  setTimeSec: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
