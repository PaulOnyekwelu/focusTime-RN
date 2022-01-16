import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/screens/Focus";
import Timer from "./src/screens/Timer";
import { iFocusHistoryItem as iHistoryItem } from "./types";

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string | null>("");
  const [focusHistory, setFocusHistory] = useState<iHistoryItem[] | []>([]);

  const addToHistory = (subject: string, completed: boolean) => {
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
