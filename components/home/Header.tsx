import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";
import { scale, moderateScale, verticalScale} from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface HeaderProps {
  username?: string;
}

const Header = ({ username = "Bouba" }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
      <View style={styles.container}>
        <View style={styles.profil}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Profil")}
            style={styles.avatarContainer}
          >
            <Image
              source={{
                uri: "https://s3-alpha.figma.com/profile/79207c4d-bd0d-4480-8449-f5ff7527c971",
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.greeting}>Bonjour, {username}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" color={"white"} size={moderateScale(20)}/>
        </TouchableOpacity>
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  profil: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(10)
  },
  container: {
    width: "100%",
    paddingVertical: verticalScale(9),
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(100),
    backgroundColor: "#2A4793",
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: moderateScale(16),
    color: "#F3F4F6",
    marginTop: verticalScale(10),
  },

  avatarContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: moderateScale(23),
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },

  avatar: {
    width: "100%",
    height: "100%",
  },
});
