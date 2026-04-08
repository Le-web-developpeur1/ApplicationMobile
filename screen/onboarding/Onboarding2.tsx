import { View, Text, TouchableOpacity, StyleSheet, Button, ActivityIndicator, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions/src/index';
import { scale, verticalScale } from "react-native-size-matters";



export default function Onboarding2({navigation}) {

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <View style={styles.cart}>
                    <FontAwesome5 name="shopping-cart"  color={"#2A4793"} size={scale(230)} style={styles.cartMerchand}/>
                </View>
                <Text style={styles.title}>Paiements</Text>  
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding3")}>
                    <Text style={styles.buttonText}>Continuer</Text>
                </TouchableOpacity>          
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe:{
        flex: 1,
        backgroundColor: "#F7CE47",
        alignItems: "center",
    },
    container:{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: responsiveHeight(1.5),
    },
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: responsiveHeight(1.8),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: responsiveWidth(3),
        alignItems: "center",
        justifyContent: "center",
        marginTop: responsiveHeight(2.5),
        marginLeft: responsiveWidth(3),
        marginRight: responsiveWidth(2),
        width: Platform.OS === "android"
        ? responsiveWidth(82)
        : responsiveWidth(78),
      },
      
      buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: responsiveFontSize(2.2),
      },
    title: {
        color: "#2A4793",
        marginBottom: responsiveHeight(1.5),
        fontWeight: "900",
        fontSize: Platform.OS === "android"
        ? responsiveFontSize(5)
        : responsiveFontSize(4.4),
        marginLeft: responsiveWidth(3),
    },
    cart: {
        flex: 1,
        marginTop: verticalScale(30),
    },
    cartMerchand: {
        transform: [{ scaleX: -1 }] 
    }
})