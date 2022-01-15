import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string | null>(
    "learning react-native"
  );

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          onTimerEnd={() => setFocusSubject(null)}
          focusSubject={focusSubject}
          setFocusSubject={setFocusSubject}
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
