/** @format */
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import {
  Fontisto,
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialIcons,
  Foundation,
  Entypo,
  Ionicons,
} from "react-native-vector-icons";
import tags from "../data/tags";
import attendees from "../data/attendees";

const EventDetails = () => {
  const tabs = ["Details", "Attendees", "Discussions"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const DetailsTab = () => {
    return (
      <View className="flex-1">
        <Text className="text-[16px] text-slate-800 mb-2 tracking-wide leading-[21px]">
          Our Dear Friends,It Gives Us Great Joy To Cordially Invite You To Our
          Big Day. Your Presence Will Mean Everything To Us . We Hope To See
          You!
        </Text>
        {/* time and calendar info view */}
        <View className="p-[14px] flex-row items-center mt-3 mb-[5px] bg-[#34a85322] rounded-md space-x-6">
          {/* calendar view */}
          <View className="bg-[#2DC054] p-[13px] rounded-[8px] shadow-[#34A853] flex-row items-center">
            <FontAwesome5
              name="calendar-alt"
              size={20}
              className="text-white"
            />
            <Text className="ml-[8px] text-white font-[600] text-[16px]">
              18 Oct 2022
            </Text>
          </View>
          {/* time view */}
          <View className="flex-col items-start">
            <Text className="font-[700] text-[18px] text-[#2E2F3A]">
              05:00 PM
            </Text>
            <Text className="text-gray-500">Thursday</Text>
          </View>
        </View>
        {/* tags view */}
        <View className="break-words mt-2 max-w-[300px] my-2">
          <Text className="font-[600] text-[15px]">Tags</Text>
          <View className="flex-row mt-[4px] flex-wrap">
            {tags.map((tag, index) => (
              <View
                key={index}
                className=" bg-[#34a85322] m-[4px] rounded-[15px] h-[30px] w-[80px] flex-row justify-center items-center"
              >
                <Text className="text-[#34A853] font-[400]">{tag.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const AttendeesTab = () => {
    return (
      <View>
        {attendees.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            className="flex-row items-center justify-between my-2 mx-[5px]"
          >
            {/* attendee info view */}
            <View className="flex-row items-center space-x-2">
              <Image
                source={{ uri: item.image }}
                className="h-[45px] w-[45px] rounded-full"
              />
              <View className="flex-col items-start">
                <Text className="text-[15px] font-[500] text-[#2E2F3A]">
                  {item.name}
                </Text>
                <Text className="text-gray-500 font-[400]">{item.time}</Text>
              </View>
            </View>
            {/* chat icon */}
            <Ionicons
              name="chatbubbles-outline"
              className="text-[#34A853]"
              size={23}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const DiscussionsTab = () => {
    return (
      <View>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
        <Text>wedding Discussions</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} className="mt-[1px]">
        {/* header view for event host info */}
        <View className="p-4 flex flex-row items-start justify-between mt-[10px] mb-2">
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
            <Feather
              name="bell"
              size={23}
              className="bg-[#34a85322] p-[5px] rounded-full"
            />
          </TouchableOpacity>
        </View>
        {/* wedding images view */}
        <View>
          <Image
            source={{
              uri: "https://cdn0.weddingwire.com/article/7776/3_2/960/jpg/6777-s-wedding-processional-order-aurora-photography.jpeg",
            }}
            className="aspect-video h-[250px]"
          />
        </View>
        <Text className="text-center p-3 font-[600] text-[24px] text-[#2E2F3A]">
          Toyo's Wedding
        </Text>
        {/* wedding details info view */}
        <View className="mx-8 flex-row items-center p-2 bg-[#FAFAFA] justify-between">
          {/* icons view for wedding info */}
          <View className="flex-row items-center pr-[10px] border-r border-[#34a85363]">
            <MaterialIcons
              name="chat"
              size={17}
              className="text-[#34A853] bg-[#34a85343] rounded-full p-[6px] mr-[3px]"
            />
            <Text className="font-[400]">22.2k</Text>
          </View>
          <View className="flex-row items-center pr-[25px] border-r border-[#34a85363]">
            <View className="bg-[#34a85343] flex-row items-center justify-center rounded-full mr-[3px]">
              <Foundation
                name="heart"
                size={17}
                className="text-[#34A853]  rounded-full p-[6px]"
              />
            </View>
            <Text className="font-[400]">20.5k</Text>
          </View>
          <View className="flex-row items-center">
            <Fontisto
              name="share"
              size={17}
              className="text-[#34A853] bg-[#34a85343] rounded-full p-[6px] mr-[3px]"
            />
            <Text className="font-[400]">11.4k</Text>
          </View>
        </View>
        {/* tab navigators */}
        <View className="flex-row mx-4 items-center justify-between mb-3 mt-3">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setCurrentTab(tabs[0])}
            className={`p-2 ${
              currentTab === tabs[0] ? "border-b-2 border-[#34A853]" : ""
            }`}
          >
            <Text
              className={`font-[500] text-[16px] ${
                currentTab === tabs[0] ? "text-[#34A853]" : "text-gray-400"
              }`}
            >
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setCurrentTab(tabs[1])}
            className={`p-2 ${
              currentTab === tabs[1] ? "border-b-2 border-[#34A853]" : ""
            }`}
          >
            <Text
              className={`font-[500] text-[16px] ${
                currentTab === tabs[1] ? "text-[#34A853]" : "text-gray-400"
              }`}
            >
              Attendees (10)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setCurrentTab(tabs[2])}
            className={`p-2 ${
              currentTab === tabs[2] ? "border-b-2 border-[#34A853]" : ""
            }`}
          >
            <Text
              className={`font-[500] text-[16px] ${
                currentTab === tabs[2] ? "text-[#34A853]" : "text-gray-400"
              }`}
            >
              Discussions
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mx-4 mb-3 ">
          {/* tab screens view */}
          {currentTab === tabs[0] && <DetailsTab />}
          {currentTab === tabs[1] && <AttendeesTab />}
          {currentTab === tabs[2] && <DiscussionsTab />}
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "linear-gradient(95.8deg, #34A853 -0.68%, #2DC054 98.01%)",
  },
});
