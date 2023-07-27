import { TextInput } from "react-native";
import styles from "./styles";

export const AmountInput = ({ value, setAmount }) => {
  const toString = String(value);
  const updateNewValue = (newValue, action) => {
    const isInteger = newValue.match(/^[0-9]*$/);
    if (!isInteger) return;

    const removeLeftZero = newValue.replace(/^(0)(.+)/, "$2");

    action(removeLeftZero);
  };
  return (
    <TextInput
      style={styles.amountInput}
      value={toString}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(e) => updateNewValue(e, setAmount)}
    />
  );
};
