import Header from "@/components/Headers";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { FontAwesome6 } from "@expo/vector-icons";

export default function PasswordChange() {

    const [codePin, setCodePin] = useState("");
    const [hidden, setHidden] = useState(true);

    return (
        <View style={{ flex: 1}}>
            <Header title="Changer de code PIN"/>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "android" ? "height" : "padding"}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: verticalScale(20) }}
                >
                   <View style={styles.container}>
                        <Text style={styles.text}>Veuillez saisir l'ancien code PIN et le nouveau code PIN pour changer votre code PIN</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input} 
                                placeholder="Entrez votre ancien code PIN"
                                keyboardType="numeric"
                                secureTextEntry={hidden}
                                value={codePin}
                                onChangeText={setCodePin}
                            />
                            <TouchableOpacity onPress={() => setHidden(!hidden)}>
                                <FontAwesome6 
                                    name={hidden ? "eye-slash" : "eye"} 
                                    style={styles.icon}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input} 
                                placeholder="Entrez votre nouveau code PIN"
                                keyboardType="numeric"
                                secureTextEntry={hidden}
                                value={codePin}
                                onChangeText={setCodePin}
                            />
                            <TouchableOpacity onPress={() => setHidden(!hidden)}>
                                <FontAwesome6 
                                    name={hidden ? "eye-slash" : "eye"} 
                                    style={styles.icon}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input} 
                                placeholder="Confirmer votre nouveau code PIN"
                                keyboardType="numeric"
                                secureTextEntry={hidden}
                                value={codePin}
                                onChangeText={setCodePin}
                            />
                            <TouchableOpacity onPress={() => setHidden(!hidden)}>
                                <FontAwesome6 
                                    name={hidden ? "eye-slash" : "eye"} 
                                    style={styles.icon}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.confirmer}
                        >
                            <Text style={styles.confirmerText}>Confirmer</Text>
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
        paddingHorizontal: scale(16),

    },
    text: {
        textAlign: "center",
        paddingTop: verticalScale(30),
        fontWeight: "bold",
        fontSize: moderateScale(18),
        paddingHorizontal: scale(10),
        color: "#2A4793",
        paddingBottom: verticalScale(30)
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
        color: "#E19120"
    }, 
    input: { 
        fontSize: moderateScale(16), 
        color: "#000", 
        paddingVertical: verticalScale(10), 
    },
    confirmer: {
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2A4793",
        height: verticalScale(50),
        borderRadius: moderateScale(8),
        marginTop: verticalScale(20)
    },
    confirmerText: {
        color: "white",
        fontSize: moderateScale(18),
    },
});