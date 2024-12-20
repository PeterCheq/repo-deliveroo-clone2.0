import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectBasketItems, totalBasket } from "../features/BasketSlice";
import { useNavigation } from "@react-navigation/native";

function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(totalBasket);
  const navigation = useNavigation();
  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("BasketScreen")}
        className="rounded-lg p-4 mx-5 flex-row items-center space-x-1 bg-[#00ccbb]"
      >
        <Text className="text-white  font-extrabold text-lg bg-[#1c7d75] py-1 px-2">
          {items.length}
        </Text>
        <Text className="text-white font-extrabold text-lg text-center flex-1">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          R{basketTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BasketIcon;
