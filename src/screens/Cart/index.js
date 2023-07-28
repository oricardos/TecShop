import React from "react";
import { FlatList } from "react-native";
import { Item } from "../../components/Item";
import { CartStatus } from "../../components/CartStatus";

export const Cart = ({services}) => {
  return (
    <>
      <CartStatus />
      <FlatList
      data={services}
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
