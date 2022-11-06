/** @format */
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  Fontisto,
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialIcons,
  Foundation,
  Entypo,
} from "react-native-vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import { enableScreens } from "react-native-screens";

enableScreens(true);
function TabDetails() {
  return (
    <View className="flex-1 bg-red-500">
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
      <Text>wedding details</Text>
    </View>
  );
}

function TabAttendees() {
  return (
    <View>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
      <Text>wedding Attendees</Text>
    </View>
  );
}

function TabDiscussions() {
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
}

// const NavigationCont = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: {
//           fontSize: 12,
//           color: "green",
//         },
//         tabBarIndicatorStyle: { backgroundColor: "green" },
//       }}
//     >
//       <Tab.Screen name="Details" component={TabDetails} />
//       <Tab.Screen name="Attendees" component={TabAttendees} />
//       <Tab.Screen name="Discussions" component={TabDiscussions} />
//     </Tab.Navigator>
//   );
// };
const EventDetails = () => {
  const tabs = ["Details", "Attendees", "Discussions"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        {/* header view for event host info */}
        <View className="p-4 flex flex-row items-start justify-between mt-[17px] mb-2">
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
        <Text className="text-center p-3 font-[500] text-[24px] text-slate-800">
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
            <Text className="font-[500]">22.2k</Text>
          </View>
          <View className="flex-row items-center pr-[25px] border-r border-[#34a85363]">
            <Foundation
              name="heart"
              size={17}
              className="text-[#34A853] bg-[#34a85343] rounded-full p-[7px] mr-[3px]"
            />
            <Text className="font-[500]">20.5k</Text>
          </View>
          <View className="flex-row items-center">
            <Fontisto
              name="share"
              size={17}
              className="text-[#34A853] bg-[#34a85343] rounded-full p-[6px] mr-[3px]"
            />
            <Text className="font-[500]">11.4k</Text>
          </View>
        </View>
        {/* tab navigators */}
        <View>
          <TouchableOpacity>
            <Text>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Attendees</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Discussions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetails;
