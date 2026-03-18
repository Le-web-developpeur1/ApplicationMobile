import React, { useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

const transactionsReussies = [
    {
        name: "Boubacar Bah",
        type: "Transfert d'argent",
        amount: "600 000 GNF",
        date: "01 Février 2026",
        status: "réussie"
    },
    {
        name: "Fodé Douno",
        type: "Transfert d'argent",
        amount: "849 000 GNF",
        date: "02 Février 2026",
        status: "réussie"
    },
];
const transactionsEncours = [
    {
        name: "Rouguiatou Diallo",
        type: "Transfert d'argent",
        amount: "1 200 000 GNF",
        date: "28 Janvier 2026",
        status: "en attente"
    },
    {
        name: "Alphonse Kaman",
        type: "Transfert d'argent",
        amount: "599 000 GNF",
        date: "21 Décembre 2025",
        status: "en attente"
    },
];

const RecentTransactions = () => {
  const [activTab, setActivTab] = useState<"reussies" | "encours">("reussies");

  const navigation = useNavigation<NavigationProp>();

  const data = activTab === "reussies" ? transactionsReussies : transactionsEncours;

    return (
        <View style={styles.container}>

            <View style={styles.headerRow}>
                <Text style={styles.title}>Transactions récentes</Text>
            </View>

            <View style={styles.tabs}>
              <View style={{ flexDirection: "row"}}>
                <TouchableOpacity onPress={() => setActivTab("reussies")}>
                    <Text 
                      style={[
                        styles.tab,
                        activTab === "reussies" && styles.activeTab
                      ]}
                    >
                      Réussies
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setActivTab("encours")}>
                    <Text 
                      style={[
                        styles.tab,
                        activTab === "encours" && styles.activeTab
                      ]}
                    >
                      En cours
                    </Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("HistoriqueScreen", {
                  activTab
                })}
              >
                <Text style={[styles.text && styles.link]}>Voir plus ></Text>
              </TouchableOpacity>
            </View>

            {data.map((item, index) => (
              <TouchableOpacity key={index} style={styles.item}>
                <View style={styles.avatar}/>

                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={{flexDirection:'row', gap: 5}}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text 
                      style={[
                        styles.status,
                        item.status === "réussie" && {color: "green"},
                        item.status === "en attente" && {color: "red"}
                      ]}
                    >
                      {item.status}
                    </Text>
                  </View>
                </View>

                <View style={styles.right}>
                  <Text style={styles.amount}>{item.amount}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            ))}

        </View>
    );
}

export default RecentTransactions;

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: scale(37),
    },
  
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    title: {
      fontSize: moderateScale(18),
      fontWeight: "700",
      color: "#111827",
    },
  
    more: {
      color: "#2A4793",
      fontSize: moderateScale(14),
      fontWeight: "600",
    },
  
    tabs: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: verticalScale(10),
      marginBottom: verticalScale(10),
    },
  
    tab: {
      marginRight: scale(20),
      fontSize: moderateScale(14),
      fontWeight: "500",
    },
  
    activeTab: {
      color: "#FFFFFF", 
      fontWeight: "700", 
      backgroundColor: "#0664EC", 
      paddingHorizontal: scale(10), 
      paddingVertical: verticalScale(2), 
      borderRadius: moderateScale(10),
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
    status: {
      fontSize: moderateScale(10),
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
    text: {
      fontSize: moderateScale(14),
      color: "#4B5563",
      flexShrink: scale(1),
    },
    link: {
        color: "#2A4793",
        fontWeight: "700",
    },
  });