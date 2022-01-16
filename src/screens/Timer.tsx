import { useKeepAwake } from "expo-keep-awake";
import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration, Platform } from "react-native";
import { iTimer } from "../../types";
import Counter from "../components/Counter";
import CustomProgressBar from "../components/CustomProgressBar";
import RoundedButton from "../components/RoundedButton";
import Timing from "../components/Timing";

const Timer = ({
  focusSubject,
  onTimerEnd,
  backButtonHandler,
  addToHistory,
}: iTimer) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false);
  const [reset, setReset] = useState(false);
  const [progress, setProgress] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const changeTimeHandler = (val: number, type?: string) => {
    setReset(true);
    setIsStarted(false);
    setProgress(1);
    if (type === "+") {
      setMinutes(minutes + val);
    } else if (type === "-") {
      const result = minutes - val;
      if (result >= 0) setMinutes(result);
    } else {
      setMinutes(val);
    }
  };

  const VibrateAndEnd = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => {
        clearInterval(interval);
        addToHistory(focusSubject, true);
        onTimerEnd();
      }, 20000);
    } else {
      Vibration.vibrate(20000);
    }
  };

  const finishReset = () => {
    setIsCompleted(true);
    setMinutes(0);
    setIsStarted(false);
    setProgress(0);
    VibrateAndEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterSec}>
        <Counter
          minutes={minutes}
          isStarted={isStarted}
          setProgress={setProgress}
          finishReset={finishReset}
          shouldReset={reset}
          isCompleted={isCompleted}
        />
      </View>
      <View style={styles.textSec}>
        <Text style={styles.text}>Currently focusing on: </Text>
        <Text style={styles.text}>{focusSubject}</Text>
      </View>
      <CustomProgressBar progress={progress} />
      <View style={styles.controlSec}>
        <Timing changeTimeHandler={changeTimeHandler} />
        <RoundedButton
          size={150}
          title={isStarted ? "PAUSE" : "START"}
          onPress={() => {
            setReset(false);
            if (minutes === 0) return;
            setIsStarted(!isStarted);
          }}
        />
        <View style={styles.navSec}>
          <RoundedButton
            title="Back"
            size={75}
            onPress={() => {
              addToHistory(focusSubject, isCompleted);
              backButtonHandler();
            }}
          />
        </View>
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
  navSec: {
    padding: 20,
    width: "100%",
    alignItems: "flex-end",
    flex: 1,
  },
});
