import React from "react";
import { Text, TouchableOpacity } from "react-native";
import functionStyle from "./styles";

export const Button = ({ small = false, inverted = false, text, action }) => {
  const defaultStyle = functionStyle(small, inverted);
  return (
    <TouchableOpacity style={defaultStyle.btn} onPress={action}>
      <Text style={defaultStyle.text}>{text}</Text>
    </TouchableOpacity>
  );
};
