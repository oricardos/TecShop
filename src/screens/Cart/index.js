import React from "react";
import { FlatList, View } from "react-native";
import { Item } from "../../components/Item";
import { CartStatus } from "../../components/CartStatus";
import { items } from "../../items";

export const Cart = () => {
  return (
    <>
      <CartStatus />
      <FlatList
      data={items}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item: { name, img, price, description } }) => {
        return (
          <Item isCart name={name} img={img} price={price} description={description} />
        );
      }}
    />
    </>
    
  );
};
