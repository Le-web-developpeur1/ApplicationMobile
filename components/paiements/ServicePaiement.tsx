import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const paiementService = [
    { label: "Électricité", img: require("@/assets/images/paiement/edg.jpeg"), route: "PaiementFacture"},
    { label: "eSim", img: require("@/assets/images/paiement/esim.jpg"), route: "ESim"},
    { label: "Gift Card", img: require("@/assets/images/paiement/giftcard.png"), route: "GiftCard"},
] as const;

export default function ServicePaiement() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
                <View style={styles.grid}>
                    {paiementService.map((service, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => navigation.navigate(service.route)}
                        >
                            <Image source={service.img} style={styles.image}/>
                            <Text style={styles.itemText}>{service.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: verticalScale(2),
    },
    label: {
        marginTop: verticalScale(8),
        fontSize: moderateScale(15),
        fontWeight: "600",
        color: "#2A4793",
    },
    item: {
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    itemText: {
        paddingTop: verticalScale(2),
        fontSize: moderateScale(15),
        color: "#000",
        textAlign: "center"
    },
    image: {
        width: scale(40), 
        height: verticalScale(35),
        marginHorizontal: scale(25),
        borderRadius: moderateScale(10)
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginHorizontal: scale(15),
    },
})