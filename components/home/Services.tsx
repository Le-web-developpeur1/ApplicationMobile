import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, TouchableWithoutFeedback } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const images = [
    { label: "Cash Moov", img: require("@/assets/images/LogoCashMoov.png"), route: "DetailBeneficiare" },
    { label: "Orange", img: require("@/assets/imTrans/logo-orange.png") },
    { label: "Cellcom", img: require("@/assets/images/cellcom.png"), route: "CreditDetail", typeCredit: "pour autre"},
    { label: "MTN", img: require("@/assets/images/mtn.png"), route: "CreditDetail", typeCredit: "pour autre"},
    { label: "International", img: require("@/assets/images/globe.jpg"), route: "International"},
];

const Services = () => {
    const navigation = useNavigation<NavigationProp>();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={styles.title}>Services</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ServicesPartenaire")}
                >
                    <Text style={[styles.text, styles.link]}>Voir plus ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.grid}
            >
                {images.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.service}
                        onPress={() => {
                            if (item.label === "Orange") {
                                setModalVisible(true);
                            } else {
                                navigation.navigate(item.route as any, {typeCredit: item.typeCredit});
                            }
                        }}
                    >
                        <View style={styles.iconContainer}>
                            <Image source={item.img} style={styles.image1}/>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={{ flexDirection: "column"}}>
                                <TouchableOpacity 
                                    onPress={() =>{ 
                                        setModalVisible(false);
                                        navigation.navigate("DetailTransactions", { 
                                            headerTitle: 'Transfert Sortant', 
                                            montantE: "Montant", 
                                            montantR: "Montant", 
                                            typeTransfert: "sortant"
                                        })
                                    }}
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
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigation.navigate("DetailTransactions", { 
                                            headerTitle: "Transfert Entrant", 
                                            montantE: "Montant reçu", 
                                            montantR: "Montant de l'envoi", 
                                            typeTransfert: "entrant"
                                        })
                                    }}
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
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

export default Services;

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: scale(27),
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: "bold",
      color: "#111827",
      marginBottom: verticalScale(10),
      marginLeft: scale(15),
    },
    grid: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    service: {
      width: scale(70),
      alignItems: "center",
      marginBottom: verticalScale(8),
    },
    iconContainer: {
      width: scale(60),
      height: verticalScale(60),
      borderRadius: moderateScale(20),
      backgroundColor: "#E8ECF5",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
        fontSize: moderateScale(14),
        color: "#4B5563",
        flexShrink: scale(1),
    },
    link: {
        color: "#2A4793",
        fontWeight: "700",
    },
    image1: {
        height: verticalScale(50),
        width: scale(55),
        borderRadius: moderateScale(5),
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: scale(20),
        borderRadius: moderateScale(10),
        width: scale(250),
        alignItems: "flex-start",
        
    },
    modalText: {
        fontSize: moderateScale(18),
        marginBottom: verticalScale(20),
    },
    closeButton: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(20),
        borderRadius: moderateScale(6),
    },
    closeText: {
        color: "white",
        fontWeight: "bold",
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
