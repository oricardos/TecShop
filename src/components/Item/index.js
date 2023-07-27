import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { AmountInput } from "../AmountInput";
import { Button } from "../Button";

export const Item = ({ name, img, price, description }) => {
  const [finalPrice, setFinalPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  return (
    <View style={styles.wrapperItem}>
      <Image source={img} style={styles.itemImg} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.itemPrice}>R${price}</Text>

        <View style={styles.addItem}>
          <View style={styles.item}>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>Quantidade: </Text>
              <AmountInput setAmount={setAmount} value={amount} />
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>Preço:</Text>
              <Text style={styles.finalPrice}>R${finalPrice}</Text>
            </View>
          </View>

          <Button text={"Adicionar"} />
        </View>
      </View>

      <View style={styles.divider} />
    </View>
  );
};
