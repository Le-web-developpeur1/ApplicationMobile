import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Image, Platform } from "react-native";
import Header from "@/components/Headers";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function EsimBenef() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");

    const { euro, gnf, country, name } = route.params as {
        euro: string,
        gnf: string,
        country: string,
        name: string,
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Détails du bénéficaire"/>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: verticalScale(20) }}
                    >
                        <View style={styles.container}>
                            <Text style={styles.title}>Achat de eSim</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    value={country}
                                    editable={false}
                                />
                            </View>
                            <Text style={styles.subtitle}>eSim : {euro} </Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    value={gnf}
                                    editable={false}
                                />
                                <Text style={styles.icon}>GNF</Text>
                            </View>
                            <View style={styles.separator}/>
                            <Text style={styles.title}>Détails du bénéficiaire</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Prénom et Nom"
                                    value={nom}
                                    onChangeText={setNom}
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Veuillez entrer l'adresse e-mail"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                            <View>

                                <Text style={{ color: "red", fontSize: moderateScale(12), marginTop: verticalScale(10)}}>Achat non remboursable et utilisable seulement par les comptes en :
                                    <Text style={{ fontWeight: "700", fontSize: moderateScale(16)}}>  {country}</Text>
                                </Text>
                            </View>

                            <TouchableOpacity 
                                style={styles.button}
                                onPress={() => navigation.navigate("EsimConfirm", {
                                    euro, 
                                    gnf, 
                                    name,
                                    nom,
                                    email,
                                })}
                            >
                                <Text style={styles.buttonText}>Acheter</Text>
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
    title: {
        paddingTop: verticalScale(5),
        fontSize: moderateScale(17),
        fontWeight: "bold",
        paddingHorizontal: scale(5),

    },
    subtitle: {
        fontSize: moderateScale(14),
        fontWeight: "bold",
        paddingTop: verticalScale(3),
        textAlign: "center",
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
        marginTop: verticalScale(22),
        marginLeft: scale(3),
        marginRight: scale(2),
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
    separator: {
        borderBottomWidth: moderateScale(2),
        borderBottomColor: "#D3D3D3",
        marginVertical: verticalScale(20),
        marginHorizontal: scale(15)
    },
})