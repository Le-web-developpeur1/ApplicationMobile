import { RootStackParamList } from "@/navigation/types";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState, useRef } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Header from "../../../Headers";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ConfirmationInter() {
        const navigation = useNavigation<NavigationProp>();

        const [loading, setLoading] = useState(false);

        const [hidden, setHidden] = useState(true);
        const [codePin, setCodePin] = useState("");
        const [afficheCode, setAfficheCode] = useState(false);

        const route = useRoute();
        const { phone, name, fraisValue, tauxValue, xof, gnf} = route.params as {
            phone: string,
            name: string,
            xof: string,
            gnf: string,
            fraisValue: Number,
            tauxValue: Number,
        };

        const frais = new Intl.NumberFormat("fr-FR").format(Number(fraisValue));
        const newGnf = new Intl.NumberFormat("fr-FR").format(Number(gnf));
        const newXof = new Intl.NumberFormat("fr-FR").format(Number(xof));
        const date = new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric", });
        const taux = Number(tauxValue);

        const formatPhone = (phone : string) => {
            return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");        
        };

        const afficherCodePin = () => {
            setAfficheCode(true);
        };

        const scrollY = useRef(new Animated.Value(0)).current;

        const animatedHeight = scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [verticalScale(350), verticalScale(120)],
            extrapolate: "clamp",
        })
        
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
            <Header title="Confirmation"/>
            <View style={styles.container1}>
               <Animated.View style={[styles.container2, { height: animatedHeight }]}>
                <Animated.ScrollView 
                    contentContainerStyle={{ paddingBottom: verticalScale(20) }} 
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator= {false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false}
                    )}
                >
                        <View style={styles.amount}>
                            <Text style={styles.amountBig}>{newGnf} GNF</Text>
                            <Text style={styles.amountSmall}>Frais: {frais} GNF</Text>
                            <Text style={styles.amountSmall}>Taux de change: {taux}</Text>

                            <View style={styles.montantEnvoie}>
                                <Text style={styles.textEnvoie}>Montant à payer</Text>
                            </View>

                            <Text style={styles.amountBig}>{newXof} XOF</Text>
                        </View>
                        <View style={styles.separator} />
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
                </Animated.ScrollView>
                </Animated.View>
                <Text style={styles.alert}>Transfert non annulable. Prière de bien vérifier le numéro du bénéficiaire et le montant de la transaction !</Text>
                {!afficheCode ? (
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.annuler}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.annulerText}>Annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={afficherCodePin}
                            style={styles.confirmer}
                        >
                            <Text style={styles.confirmerText}>Confirmer</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input} 
                                placeholder="Code PIN Ex:1234"
                                keyboardType="numeric"
                                secureTextEntry={hidden}
                                value={codePin}
                                onChangeText={setCodePin}
                            />
                            <TouchableOpacity onPress={() => setHidden(!hidden)}>
                            <FontAwesome6 
                                name={hidden ? "eye-slash" : "eye"} 
                                style={styles.icon}
                                size={20}
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.annuler}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.annulerText}>Annuler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("RecuPaiementInter", {
                                    phone,
                                    name,
                                    xof,
                                    gnf,
                                    frais,
                                    taux,
                                })}
                                style={styles.confirmer}
                            >
                                <Text style={styles.confirmerText}>Confirmer</Text>
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
    container1: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    container2: {
        backgroundColor: "white",
        marginHorizontal: scale(30),
        borderRadius: moderateScale(8),
        marginTop: verticalScale(-25),
        overflow: "hidden"
    },
    amount: {
        alignItems: "center",
        alignContent: "center",
        marginTop: verticalScale(30),
        gap: verticalScale(8)
    },
    amountBig: {
        fontWeight: "bold",
        color: "#2A4793",
        fontSize: moderateScale(30),
    },
    amountSmall: { 
        color: "#2A4793",
        borderBottomColor: "#F5F5F5",
    },
    separator: {
        borderBottomWidth: moderateScale(1),
        borderBottomColor: "#D3D3D3",
        marginVertical: verticalScale(20),
        marginHorizontal: scale(15)
    },
    benef: {
        marginTop: verticalScale(5),
        marginHorizontal: scale(10),
    },
    benefTitle: {
        fontSize: moderateScale(20),
        paddingHorizontal: scale(8), 
        fontWeight: "bold",
        marginBottom: verticalScale(12),
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0069FF1A",
        height: verticalScale(70),
        borderRadius: moderateScale(15),
        paddingHorizontal: scale(8),
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
        fontWeight: "bold",
        color: "#2A4793",
        fontSize: moderateScale(18),
        paddingBottom: verticalScale(5)
    },
    date: {
        fontWeight: "bold",
        fontSize: moderateScale(12),
        color: "#00000090"
    },
    numero: {
        fontWeight: "bold",
        color: "#2A4793",
        fontSize: moderateScale(16),
        paddingTop: verticalScale(11),
    },
    inputWrapper: { 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between", 
        borderWidth: moderateScale(1), 
        borderColor: "#ccc", 
        borderRadius: moderateScale(8), 
        paddingHorizontal: scale(10), 
        backgroundColor: "#fff", 
        marginVertical: verticalScale(6),
        marginTop: verticalScale(20),
        marginHorizontal: scale(30),
    }, 
    icon: { 
        marginRight: scale(8),
        color: "#E19120"
    }, 
    input: { 
        fontSize: moderateScale(16), 
        color: "#000", 
        paddingVertical: verticalScale(10), 
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(35),
        marginTop: verticalScale(20),
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
        fontSize: moderateScale(18),
    },
    confirmer: {
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#2A4793",
        borderWidth: scale(2),
        width: scale(130),
        height: verticalScale(38),
        borderRadius: moderateScale(8)
    },
    confirmerText: {
        color: "#2A4793",
        fontSize: moderateScale(18),
    },
    montantEnvoie: {
        backgroundColor: "#2A4793",
        width: scale(120),
        height: scale(30),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(10)
    },
    textEnvoie: {
        fontSize: moderateScale(18),
        color: "#F7CE47"
    },
    alert: {
        color: "red",
        fontWeight: "bold",
        fontSize: moderateScale(20),
        marginHorizontal: scale(30),
        paddingTop: verticalScale(8)
    }
});