import React, { useEffect, useMemo, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/RestaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  totalBasket,
} from "../features/BasketSlice";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const basketTotal = useSelector(totalBasket);
  const deliveryFee = 4.99;

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className=" flex-1 bg-white pt-5">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full absolute top-5 right-5"
          >
            <Icons.XCircleIcon color="#00ccbb" size={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-7 bg-gray-300 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200 mb-4">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
              key={key}
            >
              <Text>{items.length}x</Text>
              <Image
                className="h-12 w-12 rounded-full"
                source={{ uri: urlFor(items[0]?.imgUrl).url() }}
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="">R{(items[0]?.price).toFixed(2)}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white space-y-4">
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Subtotol</Text>
            <Text className="text-gray-400">R{basketTotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">R{deliveryFee.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-400">
              R{(deliveryFee + basketTotal).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PrepareOrderScreen");
            }}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="font-bold text-center text-lg text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BasketScreen;
