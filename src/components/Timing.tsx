import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iTiming } from "../../types";
import RoundedButton from "./RoundedButton";

const Timing = ({ changeTimeHandler }: iTiming) => {
  return (
    <View style={styles.setTimeSec}>
      <RoundedButton size={70} title="-5" onPress={() => changeTimeHandler(5, "-")} />
      <RoundedButton size={70} title="60" onPress={() => changeTimeHandler(60)} />
      <RoundedButton size={70} title="+5" onPress={() => changeTimeHandler(5, "+")} />
    </View>
  );
};

export default Timing;

const styles = StyleSheet.create({
  setTimeSec: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
