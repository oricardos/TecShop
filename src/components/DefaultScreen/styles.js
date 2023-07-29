import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  screenAdjustment: {
    flex: 1,
    backgroundColor: colors.red,
  },
  adjustmentDown: {
    flex: 0,
    backgroundColor: colors.primaryBlue,
  },
});
