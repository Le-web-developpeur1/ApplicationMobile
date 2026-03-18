import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { FontAwesome6 } from "@expo/vector-icons";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import Header from "../Headers";


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const paiementService = [
    { label: "Retrait Code", name: "caret-down", route: "RechargeDetail" },
    { label: "Ma Banque", name: "wallet", route: "RechargeDetail"},
    { label: "Recevoir de l'international", name: "globe", route: "RechargeDetail"},
] as const;

export default function RechargeOption() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={{ flex: 1 }}>
            <Header title="Rechargement par"/>
            <View style={styles.container}>
           <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.grid}>
                    {paiementService.map((service, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => navigation.navigate(service.route)}
                        >
                            <View style={styles.icon}>
                                <FontAwesome6 name={service.name} color='white'/>
                            </View>
                            <Text style={styles.itemText}>{service.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
           </ScrollView>  
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: verticalScale(30),
        paddingHorizontal: scale(5),
    },
    label: {
        marginTop: verticalScale(8),
        fontSize: moderateScale(15),
        fontWeight: "600",
        color: "#2A4793",
    },
    icon: {
        backgroundColor: "#2A4793",
        width: scale(30),
        height: verticalScale(30),
        borderRadius: moderateScale(15),
        alignItems: "center",
        justifyContent: "center",

    },
    item: {
        paddingVertical: verticalScale(8),
        borderColor: "#2A4793",
        borderWidth: moderateScale(1),
        alignItems: "center",
        justifyContent: "center",
        width: scale(90), 
        height: verticalScale(80),
        marginHorizontal: scale(10),
        borderRadius: moderateScale(10)
    },
    itemText: {
        paddingTop: verticalScale(10),
        fontSize: moderateScale(15),
        color: "#2A4793",
        textAlign: "center"
    },
    grid: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    specialIcon: {
        marginTop: verticalScale(-15)
    }
})