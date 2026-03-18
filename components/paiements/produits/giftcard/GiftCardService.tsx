import Header from "@/components/Headers";
import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RootStackParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function GiftCardService() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();
    const [searchQuery, setSearchQuery] = useState("");

    const { country } = route.params as { country: string };

    const services : Record<string, { name: string; logo: any; screen: keyof RootStackParamList }[]> = {
        "Sénégal" : [
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: ("DetailGiftCard")},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Amazon", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
            { name: "Spotify", logo: require("@/assets/images/paiement/giftcard/spotify.webp"), screen: "DetailGiftCard"},
        ],
        "France": [
            { name: "Netflix", logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Orange Money", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
        ],
        "Mali" : [
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Spotify", logo: require("@/assets/images/paiement/giftcard/spotify.webp"), screen: "DetailGiftCard"},
        ],
        "Afrique du Sud" : [
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Spotify", logo: require("@/assets/images/paiement/giftcard/spotify.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Amazon", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Amazon", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
            { name: "Spotify", logo: require("@/assets/images/paiement/giftcard/spotify.webp"), screen: "DetailGiftCard"},
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Amazon", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Amazon", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
            { name: "Spotify", logo: require("@/assets/images/paiement/giftcard/spotify.webp"), screen: "DetailGiftCard"},
            { name: "Netflix" , logo: require("@/assets/images/paiement/giftcard/netflix.webp"), screen: "DetailGiftCard"},
            { name: "Playstation Store", logo: require("@/assets/images/paiement/giftcard/playstation.webp"), screen: "DetailGiftCard"},
            { name: "Amazon", logo: require("@/assets/images/paiement/giftcard/amazon.webp"), screen: "DetailGiftCard"},
        ]
    };

    const available = services[country] || [];

    const filteredServices = available.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={{ flex: 1}}>
            <Header title="Gift Card"/>
            <ScrollView
                showsVerticalScrollIndicator={false}

            >
                <View  style={{ flex: 1 }}>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Rechercher"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                   
                        <View style={styles.container}>
                            {filteredServices.length > 0 ? (
                                filteredServices.map((s, i) => (
                                    <View key={i} style={{ flexDirection: 'column'}}>
                                        <TouchableOpacity onPress={() => navigation.navigate(s.screen as any, {
                                            country, 
                                            name: s.name,
                                            logo: s.logo,
                                            })}>
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
        fontWeight: "700",
        paddingBottom: verticalScale(15)

    },
    noService: { 
        fontSize: moderateScale(14), 
        textAlign: "center",
        marginTop: verticalScale(20), 
        color: "#888", 
    },
    viewInput: {
        paddingHorizontal: scale(20),
        marginTop: verticalScale(15)
    },
    searchInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: moderateScale(8),
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10),
        fontSize: moderateScale(14),
        marginBottom: verticalScale(10),
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
      card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 20,
        elevation: 2,
    },
    label1: {
        fontSize: 16,
        fontWeight: "600",
    },
    
});