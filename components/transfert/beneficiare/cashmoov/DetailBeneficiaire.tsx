import { useState } from "react";
import { ScrollView,Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import Header from "@/components/Headers";
import { FontAwesome6 } from "@expo/vector-icons";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { handleContactsPermission } from "@/utils/permissionHandler";


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DetailBeneficiareRouteProp = RouteProp<RootStackParamList, "DetailBeneficiare">;

export default function DetailBeneficiare() {
    
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<DetailBeneficiareRouteProp>();
   
    const [phone, setPhone] = useState(route.params?.phone || "");
    const [name, setName] = useState(route.params?.name || "");
    const [amount, setAmount] = useState("");


    return (
        <View style={{ flex: 1}}>
            <Header title="Transfert d'argent"/>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView 
                    style={{ flex: 1}} 
                    contentContainerStyle={{ paddingBottom: verticalScale(20) }}
                >
                <View style={styles.container}>
                    <Text style={styles.title}>Détails du bénéficiare</Text>
                    <TextInput
                        style={[styles.input, styles.inputWrapper]} 
                        value="Guinée"
                        editable={false}
                    />
                <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input} 
                            placeholder="Numéro du bénéficiare"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                        <TouchableOpacity
                            onPress={() => handleContactsPermission(navigation, "DetailBeneficiare")}
                        >
                            <FontAwesome6 name="user" size={moderateScale(20)} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={[styles.input, styles.inputWrapper]}
                        placeholder="Prénom et Nom"
                        value={name}
                        onChangeText={setName}
                    />
                <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input} 
                            placeholder="Montant"
                            keyboardType="phone-pad"
                            value={amount}
                            onChangeText={setAmount}
                        />
                        <Text style={styles.icon}>GNF</Text>
                    </View>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Confirmation", {
                        phone,
                        name,
                        amount,
                    })}
                    >
                        <Text style={styles.buttonText}>Transférer</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: verticalScale(20),
        paddingHorizontal: scale(20),
    },
    title: {
        fontSize: moderateScale(18),
        paddingHorizontal: scale(2), 
        fontWeight: "bold",
        marginBottom: verticalScale(3)
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
});