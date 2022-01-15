import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { iCounter } from "../../types";

const minutesToMilliSec = (time: number) => time * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

const Counter = ({
  minutes,
  isStarted,
  setIsStarted,
  setProgress,
}: iCounter) => {
  const [milliSec, setMillSec] = useState(0);

  const intervalHandler = (interval: NodeJS.Timeout) => {
    setMillSec((timer) => {
      if (timer - 1000 <= 0) {
        setIsStarted(false);
        setProgress(0);
        clearInterval(interval);
        return 0;
      } else {
        setProgress(timer / minutesToMilliSec(minutes));
        return timer - 1000;
      }
    });
  };

  useEffect(() => {
    setMillSec(minutesToMilliSec(minutes));
  }, [minutes]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStarted) {
      interval = setInterval(() => intervalHandler(interval), 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isStarted]);

  const min = Math.floor(milliSec / 60 / 1000) % 60;
  const sec = Math.floor(milliSec / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(min)}:{formatTime(sec)}
      </Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A06A1",
    width: "70%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 60,
  },
});
