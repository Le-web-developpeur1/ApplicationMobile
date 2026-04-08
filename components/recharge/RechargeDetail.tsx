import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Header from "@/components/Headers";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DetailRetraitRouteProp = RouteProp<RootStackParamList, "RetraitDetail">;


export default function RechargeDetail() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<DetailRetraitRouteProp>();

    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState(route.params?.phone || "");
    const [name, setName] = useState(route.params?.name || "");
    const [code, setCode] = useState("");

    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Retrait Code"/>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ marginBottom: verticalScale(20)}}
                    showsVerticalScrollIndicator={false}  
                    >
                        <View style={styles.container}>
                            <Text style={styles.title}>Détails de l'agent</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Numéro de téléphone"
                                    keyboardType="phone-pad"
                                    value={phone}
                                    onChangeText={setPhone}
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nom du bénéficiaire*"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Code de confirmation*"
                                    value={code}
                                    onChangeText={setCode}
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Montant"
                                    value={amount}
                                    onChangeText={setAmount}
                                />
                                <Text style={styles.icon}>GNF</Text>
                            </View>
                            {code.length > 4 && (
                                <TouchableOpacity
                                style={styles.confirmer}
                                onPress={() => navigation.navigate("ConfirmMarchand", {
                                    name,
                                    phone,
                                    amount
                                })}
                            >
                                <Text style={styles.confirmerText}>Retirer</Text>
                            </TouchableOpacity>
                            )}
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
        justifyContent: "space-around",
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20),
        marginBottom: verticalScale(20),
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
    title: {
        fontSize: moderateScale(18),
        paddingHorizontal: scale(2), 
        fontWeight: "bold",
        marginBottom: verticalScale(3)
    },
    confirmer: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(4),
        borderRadius: moderateScale(6),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(18),
        marginLeft: scale(3),
        marginRight: scale(2),
    },
    confirmerText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
    option: { 
        alignItems: "center", 
        justifyContent: "center",
        paddingTop: verticalScale(30),
    },
    iconWrapper: { 
        backgroundColor: "#0069FF1A",
        width: scale(100),
        height: verticalScale(90),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(12)
    },
    scan: {
        fontSize: moderateScale(18),
        paddingHorizontal: scale(2), 
        fontWeight: "bold",
        marginTop: verticalScale(15),
        textAlign: "center"
    }
});