import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Button } from "../Button";

export const CartStatus = ({ total = 0 }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.text}>Total do Carrinho</Text>
        <Text style={styles.total}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Text>
      </View>
      <Button inverted text={"Fechar Pedido"} />
    </View>
  );
};
