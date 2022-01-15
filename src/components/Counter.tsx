import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { iCounter } from "../../types";

const minutesToMilliSec = (time: number) => time * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

const Counter = ({
  minutes,
  isStarted,
  setProgress,
  finishReset,
  shouldReset,
}: iCounter) => {
  const [milliSec, setMillSec] = useState(0);
  let interval: NodeJS.Timeout;

  useEffect(() => {
    console.log({shouldReset})
    if (shouldReset) setMillSec(minutesToMilliSec(minutes));
  }, [shouldReset]);

  useEffect(() => {
    setMillSec(minutesToMilliSec(minutes));
  }, [minutes]);


  useEffect(() => {
    if (isStarted) {
      interval = setInterval(() => {
        setMillSec((timer) => {
          if (timer === 0) {
            finishReset();
            clearInterval(interval);
            return 0;
          } else {
            const timeLeft = timer - 1000;
            setProgress(timeLeft / minutesToMilliSec(minutes));
            return timeLeft;
          }
        });
      }, 1000);
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
    fontSize: 90,
  },
});
