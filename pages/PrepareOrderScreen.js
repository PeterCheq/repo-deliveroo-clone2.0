import { View, Text, SafeAreaView, Animated, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
export default function PrepareOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LocationScreen");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#00CCBB]">
      <Animatable.Image
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
        source={require("../assets/image_processing20190821-17803-12pij7c.gif")}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center"
      >
        Your order is being procesed
      </Animatable.Text>
      <Progress.Circle
        progress={0.3}
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
}
