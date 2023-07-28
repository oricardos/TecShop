import React, { useState, useEffect } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AmountInput } from "../AmountInput";
import { Button } from "../Button";
import { CartStatus } from "../CartStatus";

export const Item = ({isCart, name, img, price, description }) => {
  const [amount, setAmount] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0);
  const [expand, setExpand] = useState(isCart);

  const updateAmount = (newAmount) => {
    setAmount(newAmount);
    calculateFinalPrice(newAmount);
  };

  const calculateFinalPrice = (amount) => {
    setFinalPrice(price * amount);
  };

  const expandInverted = () => {
    setExpand(!expand);
    updateAmount(1);
  };

  useEffect(() => {
    updateAmount(amount);
  }, []);

  return (
    <>
      <View style={styles.wrapperItem}>
      <Image source={img} style={styles.itemImg} />
      <View style={styles.itemInfo}>
        <TouchableOpacity onPress={expandInverted}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemDescription}>{description}</Text>
          <Text style={styles.itemPrice}>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </Text>
        </TouchableOpacity>

        {expand ? (
          <View style={styles.addItem}>
            <View style={styles.item}>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>Quantidade: </Text>
                <AmountInput setAmount={updateAmount} value={amount} />
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.price}>Total:</Text>
                <Text style={styles.finalPrice}>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(finalPrice)}
                </Text>
              </View>
            </View>

            <Button text={isCart ? "Remover do Carrinho" : "Adicionar ao Carrinho"} />
          </View>
        ) : null}
      </View>

      <View style={styles.divider} />
    </View>
    </>
  );
};
