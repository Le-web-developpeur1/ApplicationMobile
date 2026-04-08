import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import Header from "@/components/Headers";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const paiementService = [
    { label: "e-Sim", img: require("@/assets/images/paiement/esim.jpg"), route: "ESim"},
    { label: "Gift Card", img: require("@/assets/images/paiement/giftcard.png"), route: "GiftCard"},
];

export default function PaiementProduit() {

    const navigation = useNavigation<NavigationProp>();

    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
                    <Header title="Produits digitaux"/>
                    <View style={styles.container}>
                        <ScrollView 
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={styles.title}>Veuillez choisir un service</Text>
                            <View style={styles.grid}>
                                {paiementService.map((service, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.item}
                                        onPress={() => { navigation.navigate(service.route as any)}}
                                    >
                                        <Image source={service.img} style={styles.image}/>
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
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: moderateScale(20),
        paddingBottom: verticalScale(20)
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
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: moderateScale(1),
        borderColor: "#ccc",
        borderRadius: moderateScale(8),
        paddingHorizontal: scale(10),
        backgroundColor: "#fff",
        marginVertical: verticalScale(6),
      },
      icon: {
        marginRight: scale(8),
      },
      input: {
        flex: 1,
        fontSize: moderateScale(16),
        color: "#000",
        paddingVertical: verticalScale(12),
      },
      list: {
        flex: 1,
        paddingHorizontal: scale(10)
      },
      item: {
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      },
      itemText: {
        paddingTop: verticalScale(10),
        fontSize: moderateScale(15),
        color: "#000",
        textAlign: "center"
      },
      card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 20,
        elevation: 2,
    },
    label1: {
        fontSize: 16,
        fontWeight: "600",
    },
    image: {
        width: scale(100), 
        height: verticalScale(70),
        marginHorizontal: scale(15),
        borderRadius: moderateScale(10)
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: scale(15),
    },
})