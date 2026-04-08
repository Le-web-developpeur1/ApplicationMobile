import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Header from "@/components/Headers";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FermetureCompte() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Fermer le compte"/>
                <View style={styles.container}>
                    <Text style={styles.title}>Attention !</Text>
                    <View style={styles.text}>
                        <Text style={{ fontSize: moderateScale(20) }}>
                            Vous allez fermer votre compte, toutes les informations associées seront supprimées.
                        </Text>
                        <Text
                            style={{ fontSize: moderateScale(20),}}
                        >
                            Les données liées à l'utilisation de votre compte (historique des transactions, informations personnelles) et votre MSISDN seront complètement supprimées de notre système. 
                        </Text>
                        <Text style={{ fontSize: moderateScale(20) }}>Êtes-vous sûr de fermer votre compte ?</Text>
                        <Text style={{ fontSize: moderateScale(20) }}>Ceci n'est pas réversible.</Text>
                        <Text style={{ fontSize: moderateScale(20),}}>Si vous souhaitez lancer le processus.</Text>
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
        paddingVertical: verticalScale(10)
    },
    text: {
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10),
        gap: scale(5)
    },
    title: {
        fontWeight: "bold",
        fontSize: moderateScale(20),
        color: "red",
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