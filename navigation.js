/** @format */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import {
  Foundation,
  FontAwesome5,
  MaterialIcons,
  Octicons,
  Ionicons,
  AntDesign,
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
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="home-filled" color={color} size={26} />
            ) : (
              <Octicons name="home" color={color} size={23} />
            ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Foundation name="clipboard-notes" color={color} size={24} />
            ) : (
              <Foundation name="clipboard" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AntDesign name="pluscircle" color={color} size={24} />
            ) : (
              <AntDesign name="pluscircleo" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" color={color} size={20} />
            ) : (
              <FontAwesome5 name="user" color={color} size={20} />
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
