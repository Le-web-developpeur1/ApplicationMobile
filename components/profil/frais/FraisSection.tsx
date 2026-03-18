import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const fraisService = [
    {label: "Transfert d'argent", name1: "send-outline", name2: "chevron-forward", },
    {label: "Achat de crédits", name1: "phone-portrait-outline", name2: "chevron-forward", },
    {label: "Paiement de facture", name1: "document-text-outline", name2: "chevron-forward", },
    {label: "Paiement Marchand", name1: "cart-outline", name2: "chevron-forward", },
    {label: "Retrait", name1: "download-outline", name2: "chevron-forward", },
    {label: "Collecte d'espèces", name1: "add-circle-outline", name2: "chevron-forward", },
    ];

export default function FraisSection() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: verticalScale(120) }}
        >
            <View style={styles.container}>
                <View style={styles.list}>
                    {fraisService.map((frais, index) => (
                        <TouchableOpacity 
                            key={index}
                            style={styles.items} 
                                    // onPress={() => navigation.navigate(frais.route)}
                        >
                            <View style={styles.leftContent}>
                                <Ionicons name={frais.name1 as any} size={verticalScale(25)} style={styles.name1}/>
                                <Text style={styles.text}>{frais.label}</Text>
                            </View>
                            <Ionicons name={frais.name2 as any} size={verticalScale(15)} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: scale(10),
        
    },
    profil: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#0069FF1A",
        height: verticalScale(70),
        borderRadius: moderateScale(12),
        padding: scale(10),
        marginTop: verticalScale(8)
    },
    avatarContainer: {
        width: scale(50),
        height: scale(50),
        borderRadius: moderateScale(25),
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        marginRight: scale(10)
    },
    avatar: {
        width: "100%",
        height: "100%",
    },
    name: {
        fontSize: moderateScale(18),
        marginLeft: scale(5),
        paddingVertical: verticalScale(2)
    },
    list:{
        marginTop: verticalScale(10),
        
    },
    items: {
        flexDirection: "row",
        paddingVertical: scale(8),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(5)
    },
    text: {
        alignSelf: "center",
        fontSize: moderateScale(18),
        marginLeft: scale(12),
        fontWeight: "bold",
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    name1: {
        color: "#0069FF40",
    }
});

