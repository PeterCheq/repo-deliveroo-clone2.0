import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/BasketSlice";
function DishRow({ name, price, imgUrl, id, description }) {
  const [isPressed, setIsPressed] = useState();
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemsToBasket = () => {
    dispatch(addToBasket({ name, price, imgUrl, id, description }));
  };
  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`bg-white p-4 border  border-gray-100 ${
          isPressed && "border-b-0"
        } `}
      >
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">R{price.toFixed(2)}</Text>
          </View>
          <Image
            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            source={{ uri: imgUrl }}
            className="h-20 w-20 bg-gray-400 p-4"
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className=" bg-white flex-row items-center px-4 pb-3 space-x-2">
          <TouchableOpacity onPress={removeItemsFromBasket}>
            <Icons.MinusIcon
              className={` rounded-full ${
                items.length > 0 ? "bg-[#00CCBB]" : "bg-[#808080]"
              }`}
              color="white"
              opacity={0.9}
              size={25}
            />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemsToBasket}>
            <Icons.PlusIcon
              className="bg-[#00CCBB] rounded-full"
              color="white"
              opacity={0.9}
              size={25}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default DishRow;
