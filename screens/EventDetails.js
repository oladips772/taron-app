/** @format */
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Fontisto, FontAwesome, Feather } from "react-native-vector-icons";

const EventDetails = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header view for event host info */}
        <View className="p-4 flex flex-row items-start justify-between mt-4 mb-2">
          <View className="flex flex-row items-start space-x-3">
            {/* host profile image */}
            <Image
              source={{
                uri: "https://whyy.org/wp-content/uploads/2020/03/download-2-1-e1583694341626.png",
              }}
              className="h-[40px] w-[40px] rounded-full object-contain"
            />
            <View>
              <Text className="font-[500] text-slate-700">Abimbola Pepper</Text>
              <Text className="text-[#34A853] font-[600]">Host</Text>
            </View>
            <TouchableOpacity
              className="bg-[#34A853] w-[65px] flex-row items-center justify-center rounded-[4px] p-[3px]"
              activeOpacity={0.7}
            >
              <Text className="text-white text-[12px] font-[500]">Follow</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="">
            <Feather name="bell" size={23} />
          </TouchableOpacity>
        </View>
        {/* wedding images div */}
        <View>
          <Image
            source={{
              uri: "https://cdn0.weddingwire.com/article/7776/3_2/960/jpg/6777-s-wedding-processional-order-aurora-photography.jpeg",
            }}
            className="aspect-video h-[250px]"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetails;
