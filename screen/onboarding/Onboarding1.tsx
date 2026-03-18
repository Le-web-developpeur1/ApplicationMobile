import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions/src/index';


export default function Onboarding1({navigation}) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Text style={styles.title}>Tranfert d'argent</Text>    
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding2")}>
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
        fontSize: responsiveFontSize(3.5),
        marginLeft: responsiveWidth(3),
        
    }
})