import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default (small, inverted) =>
  StyleSheet.create({
    btn: {
      width: 140,
      paddingVertical: small ? 3 : 9,
      paddingHorizontal: 20,
      backgroundColor: inverted ? colors.white : colors.primaryBlue,
      borderRadius: 8,
      shadowColor: inverted ? colors.white : colors.primaryBlue,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    text: {
      fontWeight: "bold",
      textAlign: "center",
      color: inverted ? colors.primaryBlue : colors.white,
    },
  });
