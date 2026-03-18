import Header from "@/components/Headers";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function About() {

    return (
        <View style={{ flex: 1 }}>
            <Header title="À propos"/>
            <View style={styles.container}>
                <Text>Version 22-Aug-2024</Text>
                <Text>Plateforme: CASH MOOV</Text>
                <Text>Identifiant: 118141</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL("https://cashmoov.net/")}
            >
                <Text style={styles.buttonText}>Visiter notre site</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(20),
        paddingTop: verticalScale(50),
        gap: scale(8)
    },
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(4),
        borderRadius: moderateScale(6),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(20),
        marginLeft: scale(20),
        marginRight: scale(19),
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
})