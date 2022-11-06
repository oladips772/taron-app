/** @format */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "react-native-vector-icons";
import Events from "./screens/Events";
import Browse from "./screens/Browse";
import Chats from "./screens/Chats";
import Account from "./screens/Account";
import Login from "./screens/Login";
import Register from "./screens/Register";

const SignedInStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#34A853",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          margin: 0,
          padding: 0,
          fontWeight: "400",
        },
      }}
    >
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="ticket-confirmation"
                color={color}
                size={24}
              />
            ) : (
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                color={color}
                size={24}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="search" color={color} size={22} />
            ) : (
              <Feather name="search" color={color} size={22} />
            ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="ios-chatbubbles-sharp" color={color} size={22} />
            ) : (
              <Ionicons
                name="ios-chatbubbles-outline"
                color={color}
                size={22}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="user" color={color} size={21} />
            ) : (
              <FontAwesome name="user-o" color={color} size={19} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const SignedOutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  const vendorInfo = useSelector((state) => state.vendorLogin);
  const [vendor, setVendor] = useState(null);

  const getVendorInfo = async () => {
    const vendorInfo = await AsyncStorage.getItem("vendorInfo");
    if (vendorInfo) {
      setVendor(JSON.parse(vendorInfo));
    } else {
      setVendor(null);
    }
  };

  useEffect(() => {
    getVendorInfo();
  }, [vendor, vendorInfo]);

  return <>{vendor ? <SignedInStack /> : <SignedOutStack />}</>;
};

export { SignedInStack, SignedOutStack, AuthStack };
