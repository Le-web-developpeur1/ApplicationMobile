import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Header from "@/components/Headers";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionsLimit() {

    const limites = [
        { label: "Nombre par jour", value: "30 Opérations"},
        { label: "Montant par jour", value: "100.000.000,00"},
        { label: "Nombre par semaine", value: "200 Opérations"},
        { label: "Montant par semaine", value: "400.000.000,00"},
        { label: "Nombre par mois", value: "400 Opérations"},
        { label: "Montant par mois", value: "800.000.000,00"},
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}> 
                <Header title="Limites des transactions"/>
                <View style={styles.container}>
                        <View style={styles.row}>
                            <Text style={[styles.title, {flex: 1}]}>Type de limite</Text>
                            <Text style={[styles.title, {flex: 1}]}>Valeur</Text>
                        </View>

                        {limites.map((limit, index) => (
                            <View key={index} style={[ styles.row, { margin: scale(10)}]}>
                                <Text style={[styles.subtitle, { flex: 1}]}>{limit.label}</Text>
                                <Text style={[styles.subtitle, { flex: 1, textAlign: "left"}]}>{limit.value}</Text>
                            </View>
                        ))}
                    </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(20),
        backgroundColor: "#0069FF1A",
        padding: scale(10),
        borderRadius: moderateScale(3),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(10)
    },
    title: {
        fontWeight: "bold",
        fontSize: moderateScale(20),
        color: "#2A4793",
    },
    subtitle: {
        fontWeight: "600",
        fontSize: moderateScale(17),
        color: "#2A479399",
    },
    row: {
        flexDirection: "row", 
        justifyContent: "space-between",
        gap: scale(50)
    }
})