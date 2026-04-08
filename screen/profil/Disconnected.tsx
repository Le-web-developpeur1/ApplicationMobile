import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import Header from "@/components/Headers";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Disconnected() {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Se déconnecter"/>
                <View style={styles.container}>
                    <View style={styles.text}>
                        <Text style={{ fontSize: moderateScale(20), textAlign: "center"}}>Êtes-vous sûr de vouloir vous déconnecter de l'application ?</Text>
                        <Text style={styles.title}>Attention!</Text>
                        <Text style={{ fontSize: moderateScale(18) }}>Cette action se déconnectera de l'application</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.annuler}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.annulerText}>Annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.confirmer}
                        >
                            <Text style={styles.confirmerText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginTop: verticalScale(20),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(10),
    },
    text: {
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10),
        gap: scale(5),
    },
    title: {
        fontWeight: "bold",
        fontSize: moderateScale(20),
        color: "red",
        textAlign: "center",
        paddingTop: verticalScale(20),
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(35),
        marginTop: verticalScale(20),
        gap: scale(20)
    },
    annuler: {
        fontWeight: "bold",
        backgroundColor: "#2A4793",
        alignItems: "center",
        justifyContent: "center",
        width: scale(140),
        height: verticalScale(38),
        borderRadius: moderateScale(8)
    }, 
    annulerText: {
        color: "white",
        fontSize: moderateScale(18),
    },
    confirmer: {
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#2A4793",
        borderWidth: scale(2),
        width: scale(140),
        height: verticalScale(38),
        borderRadius: moderateScale(8)
    },
    confirmerText: {
        color: "#2A4793",
        fontSize: moderateScale(18),
    },
});