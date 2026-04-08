import  { useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import Header from '@/components/Headers';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { handleContactsPermission } from "@/utils/permissionHandler";
import { SafeAreaView } from "react-native-safe-area-context";


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DetailBeneficiareOmRouteProp = RouteProp<RootStackParamList, "DetailBeneficiareOm">;

export default function DetailBeneficiareOm() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();

    const rout = useRoute<DetailBeneficiareOmRouteProp>();

    const {headerTitle, amount, fraisValue, tauxValue, montantFacturer, typeTransfert } = route.params as {
        headerTitle: string,
        typeTransfert: "entrant" | "sortant",
        amount: string;
        fraisValue: Number,
        taxeValue: Number,
        tauxValue: Number,
        montantFacturer: Number,
    }

    let beneficiaire = typeTransfert === "sortant" ? "du destinataire" : "de l'expéditaire";

    const [phone, setPhone] = useState(rout.params?.phone ||"");
    const [name, setName] = useState(rout.params?.name || "");


    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
                    <Header title={headerTitle}/>
                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                    <ScrollView 
                        style={{ flex: 1}} 
                        contentContainerStyle={{ paddingBottom: verticalScale(20) }}
                    >
                    <View style={styles.container}>
                        <Text style={styles.title}>Détails {beneficiaire}</Text>
                       <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input} 
                                placeholder={`Numéro ${beneficiaire}`}
                                keyboardType="phone-pad"
                                value={phone}
                                onChangeText={setPhone}
                            />
                            <TouchableOpacity
                                onPress={() => handleContactsPermission(navigation, "DetailBeneficiareOm")}
                            >
                                <FontAwesome6 name="user" size={moderateScale(20)} style={styles.icon}/>
                            </TouchableOpacity>                        
                        </View>
                        <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input} 
                                    placeholder="Prenom et Nom"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
        
                       <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("ConfirmationOm", {
                                amount, 
                                fraisValue, 
                                tauxValue, 
                                montantFacturer, 
                                typeTransfert,
                                phone,
                                name,
                            })}
                         >
                             <Text style={styles.buttonText}>Suivant</Text>
                         </TouchableOpacity>
        
                    </View>
                    </ScrollView>
                    </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
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
        borderRadius: moderateScale(8),
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
})