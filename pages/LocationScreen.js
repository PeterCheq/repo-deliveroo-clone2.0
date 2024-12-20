import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/BasketSlice";
import { selectRestaurant } from "../features/RestaurantSlice";
import * as Icons from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

export default function LocationScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1 bg-[#00CCBB]">
      <View className="z-50 py-5">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icons.XMarkIcon color="white" size={20} />
          </TouchableOpacity>
          <Text className="text-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-5 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar indeterminate={true} color="#00CCBB" size={30} />
          <Text className="mt-3 text-gray-500 text-sm">
            Your order at {restaurant.title} is being prepared{" "}
          </Text>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: -26.152728721734626,
          longitude: 28.41750398301056,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 mt-10 z-8"
      />
    </View>
  );
}
