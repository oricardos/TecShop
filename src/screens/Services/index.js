import React from "react";
import { FlatList } from "react-native";
import { Item } from "../../components/Item";
import { items } from "../../items";
import { DefaultScreen } from "../../components/DefaultScreen";

export const Services = () => {
  return (
   <>
    <FlatList
      data={items}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item: { name, img, price, description } }) => {
        return (
          <Item name={name} img={img} price={price} description={description} />
        );
      }}
    />
   </>
  );
};
