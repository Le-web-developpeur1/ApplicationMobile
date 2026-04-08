import React from "react";
import { View , Platform} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

import ServicesScreen from "../screen/services/ServicesScreen";
import HomeScreen from "../screen/home/HomeScreen";
import NotificationsScreen from "../screen/notifications/NotificationsScreen";
import ProfileScreen from "../screen/profil/ProfilScreen";


const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Services") {
            iconName = focused ? "swap-horizontal" : "swap-horizontal-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <View 
              style={{ 
                flex: 1, 
                justifyContent: "center", 
                alignItems: "center", 
                marginBottom: verticalScale(-10),
                padding: scale(3), 
                borderRadius: moderateScale(15),
                width: scale(55),
                backgroundColor: focused ? "#F7CE47" : "transparent",
                shadowColor: "#F7CE47",
                shadowOpacity: focused ? 0.15 : 0,
                shadowRadius: moderateScale(4),
                elevation: focused ? 4 : 0
              }}
            >
              <Ionicons name={iconName as any} size={moderateScale(size)} color={color} />
            </View>
          )
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS === "ios" ? verticalScale(27.5) : verticalScale(51),
          marginLeft: scale(20),
          marginRight: scale(20),
          borderRadius: moderateScale(50),
          height: verticalScale(45),
          backgroundColor: "#2A4793"
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
