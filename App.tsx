import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Focus from "./src/screens/Focus";
import Timer from "./src/screens/Timer";
import { iFocusHistoryItem as iHistoryItem } from "./types";

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string | null>("");
  const [focusHistory, setFocusHistory] = useState<iHistoryItem[] | []>([]);

  const addToHistory = (subject: string, completed: boolean) => {
    if (subject)
      setFocusHistory([
        ...focusHistory,
        {
          key: (focusHistory.length + 1).toString(),
          subject: subject,
          completed: completed,
        },
      ]);
  };

  const clearHistory = () => {
    setFocusHistory([]);
  };

  const persistFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (error) {
      console.log(error);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = (await AsyncStorage.getItem("focusHistory")) || "";
      const parsedHistory = JSON.parse(history);
      if (parsedHistory && parsedHistory.length > 0) {
        setFocusHistory(parsedHistory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    persistFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          onTimerEnd={() => setFocusSubject(null)}
          focusSubject={focusSubject}
          setFocusSubject={setFocusSubject}
          backButtonHandler={() => setFocusSubject("")}
          addToHistory={addToHistory}
        />
      ) : (
        <Focus
          setFocusSubject={setFocusSubject}
          clearHistory={clearHistory}
          focusHistory={focusHistory}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
