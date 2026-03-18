import { View, Text, ScrollView, StyleSheet  } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

export default function NotificationSection() {

    const notifications = [
        { title: "Transfert sortant", description: "Transfert de 285.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert sortant", description: "Transfert de 2.646.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert entrant", description: "Transfert de 32.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert sortant", description: "Transfert de 350.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert sortant", description: "Transfert de 10.000.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert entrant", description: "Transfert de 396.700,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert sortant", description: "Transfert de 285.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert sortant", description: "Transfert de 285.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert entrant", description: "Transfert de 285.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert sortant", description: "Transfert de 285.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
        { title: "Transfert entrant", description: "Transfert de 285.000,00 GNF effectue avec succes vers le 626058033. Frais 2.850,00. Taxe 0,00. Votre nouveau solde est 3.589.000,00 GNF. ID: 357895", date: "2026-01-26 18:06:10"},
    ]

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: verticalScale(100) }}
        >
           <View style={styles.container}>
                {notifications.map((notif, index) => (
                    <View key={index} style={styles.card}>
                        <View style={{ backgroundColor: "white", paddingHorizontal: scale(10), borderRadius: moderateScale(5), paddingVertical: verticalScale(10), gap: scale(2)}}>
                            <View style={{ flexDirection: "row"}}>
                                <View style={styles.icon}>
                                <Ionicons name="notifications" color={"white"} size={scale(20)}/>

                                </View>
                                <Text style={styles.title}>{notif.title}</Text>
                            </View>
                            <Text style={styles.description}>{notif.description}</Text>
                            <Text style={styles.date}>{notif.date}</Text>
                        </View>
                    </View>
                ))}
           </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: scale(10),     
    },
    card: {
      flexDirection: "column",
      paddingVertical: verticalScale(8),
      gap: scale(3),
    },
    title: {
      fontWeight: "bold",
      fontSize: moderateScale(20),
    },
    description: {
      textAlign: "justify",
      fontSize: moderateScale(15),
    },
    date: {
      textAlign: "right",
      color: "green",
      fontWeight: "bold",
    },
    icon: {
        marginRight: scale(3),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2A4793",
        height: verticalScale(25),
        width: scale(25),
        borderRadius: moderateScale(25)
    }
  });