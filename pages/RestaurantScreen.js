import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { urlFor } from "../sanity";
import * as Icons from "react-native-heroicons/solid";
import * as IconsOutline from "react-native-heroicons/solid";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/RestaurantSlice";
import { selectBasketItems } from "../features/BasketSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const isItems = items.length !== 0;
  const {
    params: {
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
    },
  } = useRoute();
  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }, [dispatch]);
  console.log(isItems);
  return (
    <>
      <BasketIcon />
      <ScrollView className="">
        <View className="relative">
          <Image source={{ uri: imgUrl }} className="w-full h-56" />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute left-2 top-6 bg-white p-2 rounded-full shadow-sm"
          >
            <Icons.ArrowLeftIcon size={22} color="#00BBCC" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row items-center space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icons.StarIcon size={22} color="#00CCBB" />
                <Text className="text-xs text-gray-500">
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
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">{rating}</Text> • {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <IconsOutline.QuestionMarkCircleIcon
              size={22}
              opacity={0.6}
              color="black"
            />
            <Text className="flex-1 pl-2 text-md font-bold">
              Have food Allergy?
            </Text>
            <Icons.ChevronRightIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className={`${isItems && "pb-36"}`}>
          <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>

          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.dish}
              description={dish.short_description}
              imgUrl={urlFor(dish.image).url()}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
