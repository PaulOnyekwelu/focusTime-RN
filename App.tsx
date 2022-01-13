import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState<string>("");
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>focus subject is {focusSubject}</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
