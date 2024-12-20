import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard
        id="1"
        genre="Asian"
        img={require("../images/Screenshot_20220526-155250.jpg")}
      />
      <CategoryCard
        id="1"
        genre="Hawaii"
        img={require("../images/Screenshot_20220526-155250.jpg")}
      />
      <CategoryCard
        id="1"
        genre="Pizza"
        img={require("../images/Screenshot_20220526-155250.jpg")}
      />
      <CategoryCard
        id="1"
        genre="Maxican"
        img={require("../images/Screenshot_20220526-155250.jpg")}
      />
      <CategoryCard
        id="1"
        genre="South East"
        img={require("../images/Screenshot_20220526-155250.jpg")}
      />
      <CategoryCard
        id="1"
        genre="Haiti"
        img={require("../images/Screenshot_20220526-155250.jpg")}
      />
    </ScrollView>
  );
}

export default Categories;
