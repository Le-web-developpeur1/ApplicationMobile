import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const Overlay = () => {

    console.log("Overlay mounted");

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
            }}
        >
            <MaterialCommunityIcons name="rocket-launch-outline" size={100} color="white"/>
        </View>
    )
}