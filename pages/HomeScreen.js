import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useEffect, useState } from "react";
import client from "../sanity";
function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=='featured']{
      ...,
       restaurants[]->{
    ...,
    dishes[]->,
    ...
  }
  }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <View className="pt-6 ">
      <View className=" bg-white">
        <View className="flex-row items-center mx-4 space-x-2">
          <Image
            className="h-7 w-7 rounded-full"
            source={require("../images/Screenshot_20220526-155250.jpg")}
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-44 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <Icons.ChevronDownIcon size={22} color="#00BBCC" />
            </Text>
          </View>
          <Icons.UserIcon size={30} color="#00BBCC" />
        </View>
        <View className="flex-row space-x-2 items-center pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 items-center p-1 bg-gray-200">
            <AntDesign name="search1" color="gray" size={22} />
            <TextInput
              keyboardType="default"
              placeholder="Restaurant and Cuisines"
            />
          </View>
          <Icons.AdjustmentsHorizontalIcon size={22} color="#00BBCC" />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />
        {featuredCategories?.map((features) => (
          <FeaturedRow
            key={features._id}
            id={features._id}
            title={features.name}
            description={features.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
