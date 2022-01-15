import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { iProgressBar } from "../../types";

const CustomProgressBar = ({ progress }: iProgressBar) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} color="#0A06A1" style={{ height: 10 }} />
    </View>
  );
};

export default CustomProgressBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2
  }
});
