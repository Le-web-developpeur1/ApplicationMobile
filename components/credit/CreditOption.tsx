import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import Header from "@/components/Headers";
import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const paiementService = [
    { label: "Pour moi", name: "user", typeCredit: "pour moi" },
    { label: "Pour un autre", name: "user-plus", typeCredit: "pour autre" },
];

export default function CreditOption() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                    <Header title="Achat de crédits"/>
                    <View style={styles.container}>

                        <ScrollView 
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.grid}>
                                {paiementService.map((service, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.item}
                                        onPress={() => navigation.navigate("CreditDetail", {
                                            typeCredit: service.typeCredit as any,
                                        })}
                                    >
                                        <View style={styles.icon}>
                                            <FontAwesome6 name={service.name} size={moderateScale(15)} color="white"/>
                                        </View>
                                        <Text style={styles.itemText}>{service.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>  
                    </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20),
    },
    option: {
        width: scale(120)
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
        width: scale(100), 
        height: verticalScale(80),
        marginHorizontal: scale(18),
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
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: scale(15),
    },
})