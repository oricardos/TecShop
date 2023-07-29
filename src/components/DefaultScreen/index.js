import React from "react";

import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import globalStyles, { colors } from "../../styles";
import styles from "./styles";

export default function DefaultScreen({ children }) {
  return (
    <>
      <SafeAreaView style={styles.screenAdjustment}>
        <StatusBar backgroundColor={colors.primaryBlue} />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={globalStyles.toFillIn}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.screenDown} />
    </>
  );
}
