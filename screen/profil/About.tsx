import Header from "@/components/Headers";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function About() {
    const navigation = useNavigation<NavigationProp>();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="À propos"/>
                <View style={styles.container}>
                    <Text>Version 22-Aug-2024</Text>
                    <Text>Plateforme: CASH MOOV</Text>
                    <Text>Identifiant: 118141</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('WebScreen', {url: "https://cashmoov.net/"})}
                >
                    <Text style={styles.buttonText}>Visiter notre site</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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