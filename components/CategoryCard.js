import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

function CategoryCard({ id, genre, img }) {
  return (
    <TouchableOpacity className="relative">
      <Image source={img} className="w-20 h-20 rounded mr-2" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {genre}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoryCard;
