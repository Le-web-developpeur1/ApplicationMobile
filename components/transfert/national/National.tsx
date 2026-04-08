import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Header from '../../Headers';
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function National() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
                    <Header title="Transfert d'argent"/>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "column"}}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("DetailBeneficiare")}
                            >
                                <Image 
                                    source={require("@/assets/imTrans/PNG.png")}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                            <Text style={styles.text}>Cash Moov</Text>
                        </View>
                        <View style={{ flexDirection: "column"}}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("DetailTransactions", { 
                                    headerTitle: 'Transfert Sortant', 
                                    montantE: "Montant", 
                                    montantR: "Montant", 
                                    typeTransfert: "sortant"
                                })}
                            >
                                <Image 
                                    source={require("@/assets/imTrans/logo-orange.png")}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                            <Text style={styles.text}>Envoi</Text>
                        </View>
                        <View style={{ flexDirection: "column"}}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("DetailTransactions", { 
                                    headerTitle: "Transfert Entrant", 
                                    montantE: "Montant reçu", 
                                    montantR: "Montant de l'envoi", 
                                    typeTransfert: "entrant"
                                })}
                            >
                                <Image 
                                    source={require("@/assets/imTrans/logo-orange.png")}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                            <Text style={styles.text}>Reception</Text>
                        </View>
                    
                    </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: scale(20)
    },
    image: {
        width: scale(50), 
        height: verticalScale(50),
        marginHorizontal: scale(20),
        borderRadius: moderateScale(5)
    },
    text: {
        fontSize: moderateScale(13),
        textAlign: "center",
        marginTop: verticalScale(5),
        fontWeight: "700"
    }
});