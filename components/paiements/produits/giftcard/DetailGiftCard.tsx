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

    const [euroValue, setEuroValue] = useState("");
    const [gnfValue, setGnfValue] = useState("");

    const { country, name, logo } = route.params as {
        country: string,
        name: string,
        logo: string,
    };

    const cout = [
        { euro: "€ 5", gnf: "50 000"},
        { euro: "€ 25", gnf: "250 000"},
        { euro: "€ 50", gnf: "500 000"},
        { euro: "€ 100", gnf: "1 000 000"},
    ];
    
    const formatGnf = (value: number) => {
        return new Intl.NumberFormat('fr-Fr').format(value);
    };

    const conversion = 10000;

    const handleChange = (value: string, type: "euro" | "gnf") => {
        if(type === "euro") {
            setEuroValue(value);
            const num = parseFloat(value);
            if (!isNaN(num)) {
                setGnfValue(formatGnf(num * conversion).toString());
            } else {
                setGnfValue("");
            }
        } else {
            setGnfValue(value);
            const num = parseFloat(value.replace(/\s/g, ""));
            if (!isNaN(num)) {
                setEuroValue((num /conversion).toString());
            } else {
                setEuroValue("");
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title={`${name} Gift Card`}/>
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
                                        onPress={() => navigation.navigate("GiftCardBenef", {
                                            euro: frais.euro,
                                            gnf: frais.gnf,
                                            country,
                                            name,
                                        })}
                                    >
                                        <Text style={styles.cardEuro}>{frais.euro}</Text>
                                        <Text style={styles.cardGnf}>{frais.gnf} GNF</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Entrer le montant de la Gift Card"
                                    keyboardType="numeric"
                                    value={euroValue}
                                    onChangeText={(text) => handleChange(text, "euro")}
                                />
                                <Text style={styles.icon}>€</Text>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Montant"
                                    keyboardType="numeric"
                                    value={gnfValue}
                                    onChangeText={(text) => handleChange(text, "gnf")}
                                />
                                <Text style={styles.icon}>GNF</Text>
                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.navigate("GiftCardBenef", {
                                    euroValue,
                                    gnfValue,
                                    country,
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
})