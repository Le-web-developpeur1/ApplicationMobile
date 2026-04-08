import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import Header from "../Headers";
import { useRoute, useNavigation } from "@react-navigation/native";
import { FontAwesome6, EvilIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { useRef } from "react";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function RecuTransaction() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();
    const viewShotRef = useRef<any>(null);

    const { name, phone, amount, date, type, status } = route.params as {
        name: string,
        phone: string,
        amount: string,
        date: string,
        type: string,
        status: string,
    } ;

    const captureAndShare = async () => {
        try {
            const uri = await viewShotRef.current?.capture();
            if (uri) {
                await Sharing.shareAsync(uri);
            }
        } catch (error) {
            console.log("Erreur partage :", error);
        }
    };
    const id = new Date().getMilliseconds() * 1000 + "CASHMOOV";
    const formatPhone = (phone: string) => {
        return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
    };

    let stat = status === "réussie" ? "Succès" : "En cours"

    
    return (
        <View style={{ flex: 1 }}> 
            <Header title="Reçu de paiement"/>
            <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9}}>
                <View style={styles.container}>
                        <Text style={styles.id}>ID: {id}</Text>
                        <Text style={styles.type}>{type}</Text>
                        <Text style={styles.type}>Status de la transaction : {stat}</Text>
                        <Text style={styles.amount}>{amount}</Text>
                        <View style={styles.separator}/>
                    <View style={styles.benef}>
                        <Text style={styles.benefTitle}>Bénéficiaire</Text>
                        <View style={styles.info}>
                            <View style={styles.iconUser}>
                                <FontAwesome6 name="user" size={moderateScale(20)} color="#2A4793"/>
                            </View>
                            <View style={styles.nameDate}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.date}>{date}</Text>
                            </View>
                            <Text style={styles.numero}>{formatPhone(phone)}</Text>
                        </View>
                    </View>
                </View>
            </ViewShot>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.annuler}
                    onPress={() => navigation.navigate("Tabs")}
                >
                    <Text style={styles.annulerText}>Retour</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.confirmer}
                    onPress={captureAndShare}
                >
                    <EvilIcons name="share-google" size={22} color="#2A4793"/>
                    <Text style={styles.confirmerText}>Partager</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "white",
        marginHorizontal: scale(20),
        paddingVertical: verticalScale(30),       
        borderRadius: moderateScale(8),
        marginTop: verticalScale(-25),
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: verticalScale(5)
    },
    separator: {
        borderBottomWidth: moderateScale(1),
        borderBottomColor: "#ccc",
        marginVertical: verticalScale(7),
        marginHorizontal: scale(15),
        alignSelf: "stretch"
    },
    benef: {
        marginTop: verticalScale(5),
        marginHorizontal: scale(10),
    },
    benefTitle: {
        fontSize: moderateScale(18),
        paddingHorizontal: scale(2), 
        fontWeight: "bold",
        marginBottom: verticalScale(10),
    },
    idTitle: {
        fontSize: moderateScale(18),
        paddingHorizontal: scale(2), 
        fontWeight: "bold",
        color: "#2A4793",
        marginHorizontal: scale(5),
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0069FF1A",
        height: verticalScale(60),
        borderRadius: moderateScale(15),
        width: scale(300),
        paddingHorizontal: scale(10)
    },
    iconUser: {
        backgroundColor: "white",
        width: scale(40),
        height: verticalScale(40),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(6),
        marginRight: scale(8),
        
    },
    nameDate: {
        flex: 1,
        justifyContent: "center",
    },
    name: {
        color: "#2A4793",
        fontSize: moderateScale(18),
        marginBottom: verticalScale(2),
    },
    date: {
        fontWeight: "bold",
        fontSize: moderateScale(11),
        color: "#00000090"
    },
    numero: {
        fontWeight: "600",
        color: "#2A4793",
        fontSize: moderateScale(17),
        marginBottom: verticalScale(2),
    },
    id: {
        color: "#2A4793",
        fontSize: moderateScale(16),
    },
    type: {
        paddingVertical: verticalScale(3.5),
        fontSize: moderateScale(18),
    },
    amount: {
        fontWeight: "bold",
        fontSize: moderateScale(22),
        color: "#2A4793",
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(22),
        marginTop: verticalScale(40),
        gap: scale(10)
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
        fontSize: moderateScale(20),
    },
    confirmer: {
        flexDirection: "row",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        gap: scale(6),
        borderColor: "#2A4793",
        borderWidth: scale(2),
        width: scale(140),
        height: verticalScale(38),
        borderRadius: moderateScale(8),
    },
    confirmerText: {
        color: "#2A4793",
        fontSize: moderateScale(20),
        paddingHorizontal: scale(6)
    }
})