import { View, StyleSheet, TouchableOpacity, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Header from "../Headers";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useState } from "react";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { handleContactsPermission } from "@/utils/permissionHandler";
import { FontAwesome6 } from "@expo/vector-icons";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DetailCreditRouteProp = RouteProp<RootStackParamList, "CreditDetail">;


export default function CreditDetail() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<DetailCreditRouteProp>();


    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState(route.params?.phone || "")

    const { typeCredit } = route.params as {
        typeCredit: "pour moi" | "pour autre",
    };

    const showInput = typeCredit === "pour autre" || phone !=="";


    
   const credit = [
        { prix: 1000},
        { prix: 2000},
        { prix: 5000},
        { prix: 10000},
        { prix: 15000},
        { prix: 20000},
   ]

    return (
        <View style={{ flex: 1 }}>
            <Header title="Achat de crédits"/>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                < ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ marginBottom: verticalScale(20)}}
                    showsVerticalScrollIndicator={false}
                >

                    <View style={styles.container}>
                        {showInput && (
                            <View style={styles.inputWrapper}>
                                <TextInput
                                style={styles.input}
                                placeholder="Numéro du bénéficiaire"
                                keyboardType="phone-pad"
                                value={phone}
                                onChangeText={setPhone}
                                />
                                <TouchableOpacity
                                onPress={() => handleContactsPermission(navigation, "CreditDetail")}
                                >
                                <FontAwesome6 name="user" size={moderateScale(20)} style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        )}

                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="Montant a envoyer"
                                value={amount}
                                onChangeText={setAmount}                   
                            />
                            <Text style={styles.icon}>GNF</Text>
                        </View>
                        <View style={styles.prixSection}>
                            {credit.map((c, i)=> (
                                <TouchableOpacity
                                    key={i}
                                    style={styles.card}
                                    onPress={() => setAmount(String(c.prix))}
                                >
                                    <Text style={styles.cardGnf}>{c.prix} GNF</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                            <TouchableOpacity
                                style={styles.continuer}
                                onPress={() => navigation.navigate("CreditConfirm", {
                                    phone,
                                    amount,
                                })}
                            >
                                <Text style={styles.continuerText}>Continuer</Text>
                            </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20),
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
    prixSection: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: verticalScale(10),
        paddingHorizontal: scale(10),
    },
    card: {
        width: scale(80), 
        backgroundColor: "#fff",
        borderWidth: moderateScale(1),
        borderColor: "#2A4793",
        borderRadius: moderateScale(8),
        paddingVertical: verticalScale(8),
        marginBottom: verticalScale(15),
        alignItems: "center",
        justifyContent: "center",
    },
    cardGnf: {
        fontSize: moderateScale(14),
        fontWeight: "bold",
        color: "#000",
    },
    continuer: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(4),
        borderRadius: moderateScale(8),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(8),
        marginLeft: scale(3),
        marginRight: scale(2),
        marginBottom: verticalScale(10)
    },
    continuerText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
});