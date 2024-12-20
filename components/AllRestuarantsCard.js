import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import RestaurantCard from "./RestaurantCard";
import { urlFor } from "../sanity";
export default function AllRestuarantsCard() {
  const {
    params: { restaurantsData },
  } = useRoute();
  return (
    <View>
      <Text>RestuarantList</Text>
      {restaurantsData.restaurants?.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={urlFor(restaurant.image).url()}
          title={restaurant.name}
          rating={restaurant.rating}
          genre="Japanese"
          address={restaurant.adress}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant.lat}
          lat={restaurant.long}
        />
      ))}
    </View>
  );
}
