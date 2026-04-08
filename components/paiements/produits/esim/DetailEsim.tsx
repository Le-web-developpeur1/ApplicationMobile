import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, Platform } from "react-native";
import Header from "@/components/Headers";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function DetailGiftcard() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();

    const { country, name, logo } = route.params as {
        country: string,
        name: string,
        logo: string,
    };

    const cout = [
        { mO: "1GB 7 Days Global", euro: "€ 8.0", gnf: "77 669.9"},
        { mO: "3GB 15 Days Global", euro: "€ 20.0", gnf: "194 174.76"},
        { mO: "10GB 30 Days Global", euro: "€ 50.0", gnf: "485 436.69"},
        { mO: "20GB 7 Days Global", euro: "€ 68.0", gnf: "660 194.17"},
        
    ];
    
    const formatGnf = (value: number) => {
        return new Intl.NumberFormat('fr-Fr').format(value);
    };

   

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title={`${name}`}/>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >

                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: verticalScale(20) }}
                    >
                        <View style={styles.container}>
                            <View style={styles.contourImg}>
                                <Image source={logo as any} style={styles.image}/>
                                <Text style={styles.subtitle}>{country} - {name}</Text>
                            </View>
                            <Text style={styles.title}>Veuillez choisir un montant à acheter</Text>
                            <View style={styles.fraisSection}>
                                {cout.map((frais, index) => (
                                    <TouchableOpacity 
                                        key={index} 
                                        style={styles.card}
                                        onPress={() => navigation.navigate("EsimBenef", {
                                            euro: frais.euro,
                                            gnf: frais.gnf,
                                            country,
                                            name,
                                        })}
                                    >
                                        <Text style={styles.mO}>{frais.mO}</Text>
                                        <Text style={styles.cardEuro}>{frais.euro}</Text>
                                        <Text style={styles.cardGnf}>{frais.gnf} GNF</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: verticalScale(10),
        paddingHorizontal: scale(25),
    },
    contourImg: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: scale(1),
        borderColor: "#2A4793",
        padding: scale(5),
        borderRadius: moderateScale(5)
    },
    image: {
        width: scale(200), 
        height: verticalScale(150),
        marginHorizontal: scale(20),
        borderRadius: moderateScale(10),
    },
    subtitle: {
        fontSize: moderateScale(12),
        paddingTop: verticalScale(3)
    },
    title: {
        textAlign: "center",
        paddingTop: verticalScale(10),
        fontSize: moderateScale(17),
        fontWeight: "bold",
    },
    fraisSection: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: verticalScale(20),
        paddingHorizontal: scale(20),
    },
    card: {
        width: scale(120), 
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#2A4793",
        borderRadius: moderateScale(8),
        paddingVertical: verticalScale(15),
        marginBottom: verticalScale(10),
        alignItems: "center",
        justifyContent: "center",
    },
    cardEuro: {
        fontSize: moderateScale(16),
        fontWeight: "bold",
        color: "#2A4793",
    },
    cardGnf: {
        fontSize: moderateScale(14),
        color: "#000",
        marginTop: verticalScale(5),
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
        marginVertical: verticalScale(4),
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
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(4),
        borderRadius: moderateScale(6),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(8),
        marginLeft: scale(3),
        marginRight: scale(2),
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
    mO: {
        fontSize: moderateScale(14),
        fontWeight: "bold",
        paddingBottom: verticalScale(5)
    }
})