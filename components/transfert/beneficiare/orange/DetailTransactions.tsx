import { useState } from "react";
import { ScrollView,Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import Header from "@/components/Headers";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DetailTransactions() {
    const [fraisValue, setFraisValue] = useState(0);
    const [taxeValue, setTaxeValue] = useState(0);
    const [tauxValue, setTauxValue] = useState(1);
    const [montantFacturer, setMontantFacturer] = useState(0);
    const [montantEnvoi, setMontantEnvoi] = useState("");

    const [calcul, setCalcul] = useState(false);

    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();

    const { headerTitle, montantE, montantR, typeTransfert } = route.params as { 
        headerTitle: string,
        montantE: string,
        montantR: string,
        typeTransfert: "entrant" | "sortant",
    };

    
    const [amount, setAmount] = useState("");
    
    
    const handleCalcul = () => {
        const recu = Number(amount);

        const frais = recu * 0.01;
        const taxe = 0;
        const taux = 1;

        let envoi = recu;

        if (typeTransfert === "sortant") {
            envoi = recu + frais;
        } else { 
            envoi = recu;
        }

        let facturer = envoi + taxe;

        if (typeTransfert === "entrant") {
            facturer = envoi + taxe + frais;
        } else {
            facturer = envoi + taxe;
        }

        setFraisValue(frais);
        setTaxeValue(taxe);
        setTauxValue(taux);
        setMontantFacturer(facturer);
        setMontantEnvoi(envoi.toString());
        setCalcul(true);
    };

    return (
        <View style={{ flex: 1}}>
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
                <Text style={styles.title}>Détails de la transaction</Text>
                <TextInput
                    style={[styles.input, styles.inputWrapper]} 
                    value="Guinée"
                    editable={false}
                />
               <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input} 
                        placeholder={montantE}
                        keyboardType="phone-pad"
                        value={amount}
                        onChangeText={setAmount}
                    />
                    <Text style={styles.icon}>GNF</Text>
                </View>
               <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input} 
                        placeholder={montantR}
                        keyboardType="phone-pad"
                        value={montantEnvoi}
                        editable={false}
                    />
                    <Text style={styles.icon}>GNF</Text>
                </View>
               <View style={styles.frais}>
                    <Text style={styles.text}>Taux de change : {tauxValue}</Text>
                    <Text style={styles.text}>Frais : {fraisValue} GNF</Text>
                    <Text style={styles.text}>Taxe : {taxeValue}</Text>
                    <Text style={styles.text}>Montant à facturer : {montantFacturer} GNF</Text>
               </View>

                {!calcul ? (
                     <TouchableOpacity
                     style={styles.button}
                     onPress={handleCalcul}
                  >
                      <Text style={styles.buttonText}>Calculer</Text>
                  </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("DetailBeneficiareOm", {
                        headerTitle,
                        amount, 
                        fraisValue, 
                        tauxValue, 
                        montantFacturer, 
                        typeTransfert,
                    })}
                 >
                     <Text style={styles.buttonText}>Suivant</Text>
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
    frais: {
        backgroundColor: "#0069FF1A",
        padding: scale(10),
        gap: verticalScale(10),
        borderRadius: moderateScale(8),
        marginBottom: verticalScale(10),
        marginTop: verticalScale(8)
    },
    text: {
        fontWeight: "bold",
        fontSize: moderateScale(17),
        color: "#2A4793"
    }
});