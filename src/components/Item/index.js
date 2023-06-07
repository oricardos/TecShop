import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./styles";

export const Item = ({ name, img, price, description }) => {
  const [finalPrice, setFinalPrice] = useState(0);
  return (
    <View style={styles.wrapperItem}>
      <Image source={img} style={styles.itemImg} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.itemPrice}>R${price}</Text>

        <View style={styles.addItem}>
          <View>
            <Text style={styles.amount}>Quantidade: </Text>
            <TextInput value="0" />
          </View>

          <View>
            <Text style={styles.price}>Preço:</Text>
            <Text style={styles.finalPrice}>R${finalPrice}</Text>
          </View>

          <Button title="Adicionar" />
        </View>
      </View>

      {/* <View style={styles.divider} /> */}
    </View>
  );
};
