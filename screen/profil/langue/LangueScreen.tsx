import Header from "@/components/Headers";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LangueScreen() {
    const [selectedLang, setSelectedLang] = useState<"en" | "fr">("fr");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Changer de langue"/>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setSelectedLang("fr")}>
                            <View style={styles.checkbox}>
                                {selectedLang === "fr" && <Ionicons name="checkmark" size={scale(15)} color={"#2A4793"}/>}
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.text}>Français</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setSelectedLang("en")}>
                            <View style={styles.checkbox}>
                                {selectedLang === "en" && <Ionicons name="checkmark" size={scale(15)} color={"#2A4793"}/>}
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.text}>Anglais</Text>
                    </View>

                </View>
                <TouchableOpacity 
                    style={[
                        styles.button,
                        !selectedLang && { backgroundColor: "#ccc"}
                    ]}
                    disabled={!selectedLang}
                    // onPress={() => {
                    //     if (selectedLang) {
                    //         i18n.locale = selectedLang;
                    //     }
                    // }}
                >
                    <Text style={styles.buttonText}>Changer de langue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: verticalScale(60),
        gap: scale(60)
    },
    row: {
        flexDirection: "row",
        marginBottom: verticalScale(2),
        width: scale(70),
        paddingHorizontal: scale(2),
        alignItems: "center",
        gap: scale(2)
    },
    checkbox: {
        height: verticalScale(18),
        width: scale(18),
        borderRadius: moderateScale(2),
        borderWidth: scale(2),
        borderColor: "#2A4793",
        justifyContent: "center",
        alignItems: "center",
        marginRight: scale(3),
    },
    checked: {
        backgroundClip: "#2A4793",
    },
    innerDot: {
        fontWeight: "bold"
    },
    text: {
        fontSize: moderateScale(18),
        color: "#2A4793",
    },
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(4),
        borderRadius: moderateScale(8),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(70),
        marginLeft: scale(50),
        marginRight: scale(40),
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
});