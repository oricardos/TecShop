import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  wrapperItem: {
    padding: 24,
    gap: 8,
  },
  itemImg: {
    width: 70,
    height: 70,
  },
  itemInfo: {
    flexDirection: "column",
  },
  itemName: {
    fontSize: 18,
    color: colors.red,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: colors.secondaryBlue,
  },
  itemPrice: {
    fontSize: 18,
    color: colors.primaryBlue,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  addItem: {
    flexDirection: "column",
    marginTop: 8,
  },
  amount: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primaryBlue,
    marginBottom: 8,
  },
  divider: {
    marginTop: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.tertiaryBlue,
  },
});
