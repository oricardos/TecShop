import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  wrapperItem: {
    padding: 24,
    gap: 8,
    flex: 1
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
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  amount: {
    fontSize: 16,
    marginRight: 8,
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    fontSize: 16,
    marginRight: 8,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primaryBlue,
    marginBottom: 8,
  },
  btn: {
    height: "fit-content",
  },
  divider: {
    marginTop: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.tertiaryBlue,
  },
});
