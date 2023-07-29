import React from "react";
import {
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";

export const DefaultScreen = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
