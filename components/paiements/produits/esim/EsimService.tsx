import Header from "@/components/Headers";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RootStackParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function ESimService() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();
    const { country } = route.params as { country: string };

    const [search, setSearch] = useState("");

    const services : Record<string, { name: string; logo: any; screen: keyof RootStackParamList }[]> = {
        "Sénégal" : [
            { name: "Global eSim" , logo: require("@/assets/images/paiement/esim.jpg"), screen: ("DetailEsim")},
            { name: `${country} eSim`, logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
        ],
        "France": [
            { name: "Global eSim", logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
            { name: `${country} eSim`, logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
        ],
        "Mali" : [
            { name: "Global eSim" , logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
            { name: `${country} eSim`, logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
        ],
        "Afrique du Sud" : [
            { name: "Global eSim" , logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
            { name: `${country} eSim`, logo: require("@/assets/images/paiement/esim.jpg"), screen: "DetailEsim"},
        ]
    };

    const available = services[country] || [];
    
    const filteredServices = available.filter(s => 
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="E-Sim"/>
                <ScrollView>
                    <View  style={{ flex: 1 }}>
                        <View style={styles.viewInput}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Rechercher"
                                value={search}
                                onChangeText={setSearch}
                            />
                        </View>
                        <View style={styles.container}>
                            {filteredServices.length > 0 ? (
                                filteredServices.map((s, i) => (
                                    <View key={i} style={{ flexDirection: 'column'}}>
                                        <TouchableOpacity onPress={() => navigation.navigate(s.screen as any, {country, logo: s.logo, name: s.name})}>
                                            <Image source={s.logo} style={styles.image}/>
                                        </TouchableOpacity>
                                        <Text style={styles.text}>{s.name}</Text>
                                    </View>
                                ))
                                ) : (
                                    <Text style={styles.noService}>Aucun service disponible pour {country}</Text>
                                )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: scale(25),
        marginHorizontal: scale(10),
    },
    image: {
        width: scale(100), 
        height: verticalScale(70),
        marginHorizontal: scale(20),
        borderRadius: moderateScale(10),
    },
    text: {
        fontSize: moderateScale(13),
        textAlign: "center",
        marginTop: verticalScale(5),
        fontWeight: "700"
    },
    noService: { 
        fontSize: moderateScale(14), 
        textAlign: "center",
        marginTop: verticalScale(20), 
        color: "#888", 
    },
    viewInput: {
        paddingHorizontal: scale(40),
        marginTop: verticalScale(15)
    },
    searchInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: moderateScale(8),
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(8),
        fontSize: moderateScale(14),
        marginBottom: verticalScale(10),
    },
    
});