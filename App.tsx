import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/screens/Focus";
import Timer from "./src/screens/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string | null>("");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          onTimerEnd={() => setFocusSubject(null)}
          focusSubject={focusSubject}
          setFocusSubject={setFocusSubject}
          backButtonHandler={() => setFocusSubject("")}
        />
      ) : (
        <Focus setFocusSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
