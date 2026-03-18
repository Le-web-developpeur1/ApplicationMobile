import Header from "@/components/Headers";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RootStackParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function OptionTransfert() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();
    const { country } = route.params as { country: string };

    const services : Record<string, { name: string; logo: any; screen: keyof RootStackParamList }[]> = {
        "Sénégal" : [
            { name: "CashMoov" , logo: require("@/assets/imTrans/PNG.png"), screen: ("DetailsInternational")},
            { name: "Orange Money", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
            { name: "Wave", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
        ],
        "France": [
            { name: "CashMoov", logo: require("@/assets/imTrans/PNG.png"), screen: "DetailsInternational"},
            { name: "Orange Money", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
        ],
        "Mali" : [
            { name: "CashMoov" , logo: require("@/assets/imTrans/PNG.png"), screen: "DetailsInternational"},
            { name: "Orange Money", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
            { name: "Wave", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
        ],
        "Afrique du Sud" : [
            { name: "CashMoov" , logo: require("@/assets/imTrans/PNG.png"), screen: "DetailsInternational"},
            { name: "Orange Money", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
            { name: "Wave", logo: require("@/assets/imTrans/logo-orange.png"), screen: "DetailsInternational"},
        ]
    };

    const available = services[country] || [];


    return (
        <View style={{ flex: 1}}>
            <Header title="Transfert International"/>
            <ScrollView>
                <View style={styles.container}>
                    {available.length > 0 ? (
                        available.map((s, i) => (
                            <View key={i} style={{ flexDirection: 'column'}}>
                                <TouchableOpacity onPress={() => navigation.navigate(s.screen, {country})}>
                                    <Image source={s.logo} style={styles.image}/>
                                </TouchableOpacity>
                                <Text style={styles.text}>{s.name}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noService}>Aucun service disponible pour {country}</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
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
    },
    noService: { 
        fontSize: moderateScale(14), 
        textAlign: "center",
        marginTop: verticalScale(20), 
        color: "#888", 
    },
});