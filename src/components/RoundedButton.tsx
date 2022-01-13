import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iRoundedButton } from "../../types";

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 120,
  title,
}: iRoundedButton) => {
  return (
    <TouchableOpacity style={[styles(size).container, style]}>
      <Text style={[styles(size).textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size: number) => StyleSheet.create({
  container: {
    borderRadius: size / 2,
    width: size,
    height: size,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "white",
    fontSize: size / 2
  },
});
