import Headers from "@/components/Headers";
import { useState } from "react";
import { View, StyleSheet, Text,TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DetailPaiement() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();

    const [inputShow, setInputShow] = useState(false);
    const [selectedFacture, setSelectedFacture] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [numero, setNumero] = useState("");
    const [num, setNum] = useState("")
    

    const factures = [
        "Facture Janvier",
        "Facture Février",
        "Facture Mars",
        "Facture Avril",
    ];

    const handleDetail = () => {
        setTimeout(() =>{
            setInputShow(true);
            setNum(numero);
        }, 2000);
    };

    const { typeFacture } = route.params as {
        typeFacture: "postpaye" | "prepaye";
    };

    let headerTitle = typeFacture === "postpaye" ? "Facture Postpayée" : "Facture Prépayée";
    let placeholderTitle = typeFacture === "postpaye" ? "Entrez le numéro de la référence" : "Entrez le numéro du compteur";

  return (
    <View style={{ flex: 1}}>
        <Headers title={headerTitle}/>
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                 style={{ flex: 1}} 
                 contentContainerStyle={{ paddingBottom: verticalScale(20) }}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Détails de la transaction</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            value="Guinée"
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder={placeholderTitle}
                            value={numero}
                            onChangeText={setNumero}
                        />
                    </View>

                    {typeFacture === "postpaye" && inputShow && (
                        <View style={styles.inputWrapper}>
                            <TouchableOpacity
                                style={styles.input}
                                onPress={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <Text>{selectedFacture || "Sélectionnez une facture"}</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {dropdownOpen && (
                        <View style={styles.dropdown}>
                            {factures.map((facture, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.dropdownItem}
                                    onPress={() => {
                                        setSelectedFacture(facture);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    <Text>{facture}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    {typeFacture === "postpaye" ? (
                        <View style={styles.frais}>
                            <Text style={styles.text}>Nom du client </Text>
                            <Text style={styles.text}>Numéro de référence </Text>
                            <Text style={styles.text}>Identifiant de facture </Text>
                            <Text style={styles.text}>Montant </Text>
                        </View>
                    ) : (
                        <View style={styles.frais}>
                            <Text style={styles.text}>Nom du client </Text>
                            <Text style={styles.text}>Code de référence </Text>
                            <Text style={styles.text}>Numéro de l'appareil : {num}</Text>
                        </View>
                    )}

                    {inputShow ? (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("DetailDebit", {
                                headerTitle
                            })}
                        >
                            <Text style={styles.buttonText}>Suivant</Text>
                        </TouchableOpacity>
                     ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleDetail}
                        >
                            <Text style={styles.buttonText}>Voir les détails</Text>
                        </TouchableOpacity>
                    )}
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
    frais: {
        backgroundColor: "#0069FF1A",
        padding: scale(10),
        gap: verticalScale(8),
        borderRadius: moderateScale(8),
        marginBottom: verticalScale(10),
        marginTop: verticalScale(8)
    },
    text: {
        fontWeight: "bold",
        fontSize: moderateScale(16),
        color: "#2A4793"
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: moderateScale(8),
        backgroundColor: "#fff",
        marginVertical: verticalScale(6),
      },
      dropdownItem: {
        padding: verticalScale(10),
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      },
      
})