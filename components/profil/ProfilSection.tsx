import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const profilInformation = [
    {label: "Frais", name1: "wallet-outline", name2: "chevron-forward", route: "FraisScreen"},
    {label: "Point de service", name1: "location-outline", name2: "chevron-forward", route: "FraisScreen"},
    {label: "Modifier la langue", name1: "globe-outline", name2: "chevron-forward", route: "LangueScreen"},
    {label: "Confidentialité", name1: "shield-checkmark-outline", name2: "chevron-forward", route: "FraisScreen"},
    {label: "Recommander l'application", name1: "share-social-outline", name2: "chevron-forward", storeUrl: {
        android: "https://play.google.com/store/apps/details?id=com.estel.cashmoovsubscriberapp",
        ios: "https://apps.apple.com/us/app/cashmoov-client/id6642668233?l=fr-FR"
    }},
    {label: "Conditions générales", name1: "document-text-outline", name2: "chevron-forward", url: "https://cashmoov.net/terms/"},
    {label: "Politique de confidentialité", name1: "alert-circle-outline", name2: "chevron-forward", url: "https://cashmoov.net/privacy/"},
    {label: "À propos", name1: "information-circle-outline", name2: "chevron-forward", route: "About"},
    {label: "Changer de code PIN", name1: "lock-closed-outline", name2: "chevron-forward", route: "PasswordChange"},
    {label: "Modifier la photo de profile", name1: "image-outline", name2: "chevron-forward", route: "UpdatePicture"},
    {label: "Limites des transactions", name1: "contrast-outline", name2: "chevron-forward", route: "FraisScreen"},
    {label: "Fermer le compte", name1: "alert-circle-outline", name2: "chevron-forward", route: "FraisScreen"},
    {label: "Se déconnecter", name1: "log-out-outline", name2: "chevron-forward", route: "FraisScreen"},
  ];
  

export default function ProfilSection() {

    const navigation = useNavigation<NavigationProp>();


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: verticalScale(120) }}
        >
            <View style={styles.container}>
                <View style={styles.profil}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{
                                uri: "https://s3-alpha.figma.com/profile/79207c4d-bd0d-4480-8449-f5ff7527c971",
                            }}
                            style={styles.avatar}
                        />
                    </View>
                    <View>
                        <Text style={styles.name}>Boubacar Bah</Text>
                        <Text style={styles.name}>🇬🇳  +224 626058033</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    {profilInformation.map((profil, index) => (
                        <TouchableOpacity 
                            key={index}
                            style={styles.items} 
                            onPress={() => {
                                if (profil.storeUrl) {
                                    const url = Platform.OS === "android" ? profil.storeUrl.android : profil.storeUrl.ios;
                                    Linking.openURL(url);
                                } else if (profil.url) {
                                    Linking.openURL(profil.url);
                                } else if (profil.route) {
                                    navigation.navigate(profil.route);
                                }
                            }}
                        >
                            <View style={styles.leftContent}>
                                <Ionicons name={profil.name1 as any} size={verticalScale(30)} style={styles.name1}/>
                                <Text style={styles.text}>{profil.label}</Text>
                            </View>
                            <Ionicons name={profil.name2 as any} size={verticalScale(15)} />
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