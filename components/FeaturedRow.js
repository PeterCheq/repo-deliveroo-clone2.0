import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import * as Icons from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import client, { urlFor } from "../sanity";
// import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FeaturedRow({ id, description, title }) {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    client
      .fetch(
        `*[_type=='featured' && _id== $id]{
  ...,
   restaurants[]->{
    ...,
     category->{
    category_name
  },
    dishes[]->,
  }
  }`,
        { id }
      )
      .then((data) => {
        setRestaurantsData(data[0]);
      });
  }, [id]);
  return (
    <View>
      <View className="flex-row  items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <TouchableOpacity
          size={22}
          onPress={() => {
            navigation.navigate("AllRestaurants", { restaurantsData });
          }}
        >
          <Icons.ArrowRightIcon color="#00BBCC" />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* <FlatList ></FlatList> */}
        {/* {console.log(restaurantsData.restaurant.image)} */}
        {restaurantsData.restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={urlFor(restaurant.image).url()}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.category?.category_name}
            address={restaurant.adress}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.lat}
            lat={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default FeaturedRow;
