import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Header from "@/components/Headers";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { handleContactsPermission } from "@/utils/permissionHandler";
import { useState } from "react";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DetailMarchandRouteProp = RouteProp<RootStackParamList, "DetailMarchand">;


export default function DetailMarchand() {

    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<DetailMarchandRouteProp>();

    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState(route.params?.phone || "");
    const [name, setName] = useState(route.params?.name || "");
    
    return (
        <View style={{ flex: 1 }}>
            <Header title="Paiement marchand"/>
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
                        <Text style={styles.title}>Détails du marchand</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="Numéro du point de vente"
                                keyboardType="phone-pad"
                                value={phone}
                                onChangeText={setPhone}
                            />
                            <TouchableOpacity
                                onPress={() => handleContactsPermission(navigation, "DetailMarchand")}
                            >
                                <FontAwesome6 name="user" size={moderateScale(20)} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="Prenom"
                                value={name}
                                onChangeText={setName}
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
                        <TouchableOpacity
                            style={styles.confirmer}
                            onPress={() => navigation.navigate("ConfirmMarchand", {
                                name,
                                phone,
                                amount
                            })}
                        >
                            <Text style={styles.confirmerText}>Payer</Text>
                        </TouchableOpacity>

                        <View style={styles.option}>
                            <TouchableOpacity 
                               style={styles.iconWrapper}
                               onPress={() => navigation.navigate("QrScanner")}
                            >
                                <MaterialIcons name="qr-code-scanner" size={moderateScale(80)} color= "#2A4793"/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.scan}>Scanner pour payer</Text>
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