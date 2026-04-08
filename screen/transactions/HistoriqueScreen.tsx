import Header from "@/components/Headers";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const transactionsReussies = [
    {
        name: "Boubacar Bah",
        type: "Transfert d'argent",
        amount: "600 000 GNF",
        date: "01 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
    },
];
const transactionsEncours = [
    {
        name: "Rouguiatou Diallo",
        type: "Transfert d'argent",
        amount: "1 200 000 GNF",
        date: "28 Janvier 2026",
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
    },
];

export default function HistoriqueScreen() {

    const route = useRoute();

    const { activTab } = route.params as { 
        activTab: "reussies" | "encours";
    };

    const data = activTab === "reussies" ? transactionsReussies : transactionsEncours;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793" }}>

            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Historique des transactions"/>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: verticalScale(70)}}
                >
                    <View style={styles.container}>
                        {data.map((item, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.avatar}/>
                        
                                <View style={styles.info}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <View style={{flexDirection:'row', gap: 5}}>
                                        <Text style={styles.type}>{item.type}</Text>
                                    </View>
                                </View>
                        
                                <View style={styles.right}>
                                    <Text style={styles.amount}>{item.amount}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(10),
        gap: scale(10)
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: verticalScale(5),
        borderBottomWidth: moderateScale(1),
        borderBottomColor: "#E5E7EB",
    },
    avatar: {
        width: scale(35),
        height: scale(35),
        borderRadius: moderateScale(22),
        backgroundColor: "#E8ECF5",
        marginRight: scale(12),
    },
    info: {
        flex: verticalScale(1),
    },
    name: {
        fontSize: moderateScale(15),
        fontWeight: "600",
        color: "#111827",
    },
    type: {
        fontSize: moderateScale(11),
        color: "#6B7280",
    },
    right: {
        alignItems: "flex-end",
    },
    amount: {
        fontSize: moderateScale(15),
        fontWeight: "700",
        color: "#111827",
    },
    date: {
        fontSize: moderateScale(10),
        color: "#6B7280",
    },  
});