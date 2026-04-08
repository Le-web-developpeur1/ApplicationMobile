import { useState, useEffect } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;



export default function RecuPaiement() {

    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();
    const viewShotRef = useRef<any>(null);

    const { name, phone, formAmount, frais, date } = route.params as {
        name: string,
        phone: string,
        formAmount: string,
        frais: string,
        date: string,
    };

    const id = new Date().getFullYear();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const formatPhone = (phone : string) => {
        return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");        
    };

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
                <Header title="Reçu de Paiement"/>
                <View style={styles.safe}>
                    {loading ? (
                        <View style={styles.container}>
                            <View>
                                <ActivityIndicator size={140} color="#009F67" style={{ marginTop: verticalScale(20)}}/>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.benef}>
                                <View style={styles.idSection}>
                                    <Text style={styles.idTitle}>ID:</Text>
                                    <Text style={styles.id}>{id}</Text>
                                </View>
                                <View style={styles.info}>
                                    <View style={styles.iconUser}>
                                        <FontAwesome6 name="user" size={moderateScale(20)} color="#2A4793"/>
                                    </View>
                                    <View style={styles.nameDate}>
                                        <Text style={styles.name}>{name}</Text>
                                        <Text style={styles.numero}>{formatPhone(phone)}</Text>
                                        <Text style={styles.date}>{date}</Text>
                                    </View>
                                    <View style={styles.amount}>
                                        <Text style={styles.amountBig}>{formAmount} GNF</Text>
                                        <Text style={styles.transfert}>Transfert</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View style={{ flex: 1 }}>
                            <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
                                <View style={styles.container}>
                                    <View style={[styles.idSection, styles.recuM]}>
                                        <Text style={styles.idTitle}>ID:</Text>
                                        <Text style={styles.id}>{id}</Text>
                                    </View>
                                    <View style={[styles.amount, styles.recuM]}>
                                        <Text style={styles.transfert}>Transfert</Text>
                                        <Text style={[styles.amountBig, styles.recuM]}>{formAmount} GNF</Text>
                                    </View>
                                    <View style={[styles.idSection, styles.recuM]}>
                                        <Text style={styles.idTitle}>Frais:</Text>
                                        <Text style={styles.id}>{frais}</Text>
                                    </View>
                                    <View style={[styles.separator, styles.recuM]} />
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
                    )}
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    container: {
        backgroundColor: "white",
        marginHorizontal: scale(30),
        paddingVertical: verticalScale(20),       
        borderRadius: moderateScale(8),
        marginTop: verticalScale(-10),
        paddingBottom: verticalScale(5),
    },
    separator: {
        borderBottomWidth: moderateScale(1),
        borderBottomColor: "#D3D3D3",
        marginVertical: verticalScale(5),
        marginHorizontal: scale(15),
    },
    benef: {
        marginTop: verticalScale(5),
        marginHorizontal: scale(10),
    },
    benefTitle: {
        fontSize: moderateScale(18),
        paddingHorizontal: scale(2), 
        fontWeight: "bold",
        marginBottom: verticalScale(15),
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
        height: verticalScale(70),
        borderRadius: moderateScale(15),
        paddingHorizontal: scale(5),
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
    idSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: verticalScale(10),
    },
    id: {
        color: "#2A4793",
        marginHorizontal: scale(5),
    },
    amount: {
        alignItems: "center",
        alignContent: "center",
        marginTop: verticalScale(18),
    },
    amountBig: {
        fontWeight: "700",
        color: "#2A4793",
        fontSize: moderateScale(18),

    },
    recuM: {
        marginTop: verticalScale(15),
    },
    transfert: {
        color: "#00000085"
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(35),
        marginTop: verticalScale(70),
    },
    annuler: {
        fontWeight: "bold",
        backgroundColor: "#2A4793",
        alignItems: "center",
        justifyContent: "center",
        width: scale(130),
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
        width: scale(130),
        height: verticalScale(38),
        borderRadius: moderateScale(8),
    },
    confirmerText: {
        color: "#2A4793",
        fontSize: moderateScale(20),
        paddingHorizontal: scale(6)
    }
})