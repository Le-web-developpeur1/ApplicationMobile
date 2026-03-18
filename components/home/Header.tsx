import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { scale, moderateScale, verticalScale} from "react-native-size-matters";

interface HeaderProps {
  username?: string;
}

const Header = ({ username = "Bouba" }: HeaderProps) => {
  
  return (
      <View style={styles.container}>
        
        <View>
          <Text style={styles.greeting}>Bonjour, {username}</Text>
          <Text style={styles.subtitle}>Bienvenue sur CashMoov</Text>
        </View>

        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://s3-alpha.figma.com/profile/79207c4d-bd0d-4480-8449-f5ff7527c971",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>

      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  

  container: {
    width: "100%",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(42),
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
