import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { iFocusHistoryItem, iFocusHistory } from "../../types";
import RoundedButton from "./RoundedButton";

const HistoryItem = ({ item }: { item: iFocusHistoryItem }) => {
  return (
    <Text style={{ color: item.completed ? "green" : "red", fontSize: 20 }}>
      {item.subject}
    </Text>
  );
};

const FocusHistory = ({ focusHistory, clearHistory }: iFocusHistory) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Focus History: </Text>
      <FlatList data={focusHistory} renderItem={HistoryItem} />
      <RoundedButton title="Clear" size={100} onPress={clearHistory} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
});
