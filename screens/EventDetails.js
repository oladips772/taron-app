/** @format */
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
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
  AntDesign,
} from "react-native-vector-icons";
import tags from "../data/tags";
import attendees from "../data/attendees";
import images from "../data/images";
import { SliderBox } from "react-native-image-slider-box";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const EventDetails = () => {
  const tabs = ["Details", "Attendees", "Discussions"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [message, setMessage] = useState(null);

  const DetailsTab = () => {
    return (
      <View className="flex-1">
        <Text className="text-[16px] text-slate-800 mb-2 tracking-wide leading-[21px]">
          Our Dear Friends,It Gives Us Great Joy To Cordially Invite You To Our
          Big Day. Your Presence Will Mean Everything To Us . We Hope To See
          You!
        </Text>
        <TouchableOpacity activeOpacity={0.6} className="-mt-2 py-[2px]">
          <Text className="text-[#34A853] font-[500] text-[16px]">
            See more
          </Text>
        </TouchableOpacity>
        {/* location info */}
        <View className="my-2">
          <View className="flex-row items-center">
            <Entypo
              name="location-pin"
              className="text-[#34A853] -ml-2"
              size={23}
            />
            <Text className="font-[500] text-[15px]">Location</Text>
          </View>
          <Text className="text-[16px] text-slate-800 mb-2 tracking-wide leading-[21px]">
            24, Akinlotan Street, Agbede Ikorodu, Lagos State.
          </Text>
        </View>
        {/* date view */}
        <View className="my-2">
          <View className="flex-row items-center space-x-2">
            <FontAwesome5
              name="calendar-alt"
              className="text-[#34A853]"
              size={20}
            />
            <Text className="font-[500] text-[15px]">Date</Text>
          </View>
          <Text className="text-[16px] text-slate-800 mb-2 tracking-wide leading-[21px] mt-[3px]">
            Thu, 8 Oct 2022 5:00 PM
          </Text>
        </View>
        {/* tags view */}
        <View className="break-words mt-4 my-2">
          <View className="flex-row items-center space-x-2">
            <Ionicons
              name="ios-pricetags"
              size={18}
              className="text-[#34A853]"
            />
            <Text className="font-[600] text-[15px]">Tags</Text>
          </View>
          <View className="flex-row mt-[4px] flex-wrap">
            {tags.map((tag, index) => (
              <View
                key={index}
                className=" bg-[#34a85322] m-[4px] rounded-[16px] h-[30px] w-[73px] flex-row justify-center items-center"
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
      <>
        <View>
          {attendees.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              className="flex-row items-start justify-between my-2 mx-[5px]"
            >
              {/* attendee info view */}
              <View className="flex-row items-start space-x-2">
                <Image
                  source={{ uri: item.image }}
                  className="h-[45px] w-[45px] rounded-full"
                />
                <View className="flex-col items-start max-w-[190px]">
                  <Text className="text-[15px] font-[500] text-[#34A853]">
                    {item.name}
                  </Text>
                  <Text className="text-gray-600 font-[400] break-words">
                    {item.congratsTex}
                  </Text>
                </View>
              </View>
              {/* chat icon */}
              <Text className="text-gray-600 text-[13px]">10:30 Am</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* message input div */}
      </>
    );
  };

  let [fontLoaded] = useFonts({
    "roboto": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

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
              <Text className="font-[500] text-slate-700 font-roboto">
                Abimbola Pepper
              </Text>
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
          <SliderBox
            images={images}
            sliderBoxHeight={250}
            dotStyle={{
              width: 20,
              height: 5,
              borderRadius: 4,
              padding: 0,
              margin: 0,
            }}
            dotColor="#34A853"
            inactiveDotColor="white"
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "flex-start",
              justifyContent: "center",
            }}
          />
        </View>
        <View className="flex-row mx-2 items-center justify-between">
          <Text
            className="text-center p-3 font-[700] text-[24px]"
            style={{ fontFamily: "roboto" }}
          >
            Toyo's Wedding
          </Text>
          {/* wedding details info view */}
          <View className="flex-row items-center p-2 justify-between space-x-6">
            {/* icons view for wedding info */}
            <TouchableOpacity
              activeOpacity={0.6}
              className="flex-col items-center"
            >
              <Ionicons
                name="heart-outline"
                size={23}
                className="rounded-full"
              />
              <Text className="font-[400] text-[12px] p-[2px] text-[#34A853]">
                20.5k
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              className="flex-col items-center"
            >
              <AntDesign name="sharealt" size={23} className="rounded-full" />
              <Text className="font-[400] text-[12px] p-[2px] text-[#34A853]">
                11.4k
              </Text>
            </TouchableOpacity>
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
              Comments (37)
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
      {/* message input or chat control view */}
      {currentTab === tabs[2] && (
        <View className="mx-4 mb-3 flex-row justify-between items-center mt-3">
          <View className="bg-gray-200 p-[9px] flex-1 rounded-[4px] flex-row items-center">
            <TouchableOpacity activeOpacity={0.5} className="p-[4px]">
              <Entypo name="plus" size={23} className="" />
            </TouchableOpacity>
            <TextInput
              value={message}
              onChangeText={(val) => setMessage(val)}
              placeholderTextColor={"gray"}
              placeholder="Messages"
              className="w-full text-[17px] ml-2"
            />
          </View>
          <TouchableOpacity
            className="h-[49px] w-[49px] bg-gray-200 rounded-md flex-row items-center justify-center ml-4"
            activeOpacity={0.5}
          >
            {!message?.trim() ? (
              <Fontisto name="mic" size={18} className="" />
            ) : (
              <Ionicons name="ios-send" size={18} className="" />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default EventDetails;
