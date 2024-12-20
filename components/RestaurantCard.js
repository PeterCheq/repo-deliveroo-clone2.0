import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import BasketIcon from "./BasketIcon";
function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      className="bg-white mr-3 shadow"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Icons.StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="gray"
            opacity={0.5}
            size={22}
          />
          <Text className="text-gray-500 text-xs">Nearby • {genre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard;
