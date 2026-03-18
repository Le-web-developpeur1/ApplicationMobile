import React from "react";
import { View, Text, Platform, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, spacing }  from '@/constants/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions/src";


export default function PinScreen({setIsLoggedIn}) {

    return (
       <SafeAreaView style={styles.safe}>

            <View >
                <Text style={styles.title}> Veuillez entrer votre code PIN</Text>
            </View>

            <View style={styles.middle}>
                <View style={styles.pinContainer}>
                    <TextInput 
                        style={[styles.pinBox, {backgroundColor: "#2A4793"}]}
                        maxLength={1}
                        keyboardType="number-pad"
                        secureTextEntry
                    />
                    <TextInput 
                        style={[styles.pinBox, {backgroundColor: "#F7CE47"}]}
                        maxLength={1}
                        keyboardType="number-pad"
                        secureTextEntry
                    />
                    <TextInput 
                        style={[styles.pinBox, {backgroundColor: "#2A4793"}]}
                        maxLength={1}
                        keyboardType="number-pad"
                        secureTextEntry
                    />
                    <TextInput 
                        style={[styles.pinBox, {backgroundColor: "#F7CE47"}]}
                        maxLength={1}
                        keyboardType="number-pad"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.biometric}>
                    <Text >Utiliser l'identification briometrique </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.biometric}>
                    <Text style={styles.biometricText}>Connexion d'un nouvel utilisateur</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(true)}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity> 
            </View>
            
            <View style={styles.bottomArea}>
                <TouchableOpacity>
                    <Text style={[styles.biometricText]}>Reinitialiser le code PIN</Text>
                </TouchableOpacity>
            </View>
       </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    safe: { 
        flex: 1, 
        justifyContent: "flex-start",
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: colors.background
    },  
    middle: { 
        alignItems: "center", 
        marginTop: responsiveHeight(2)
    }, 
    title: {
        ...typography.title,
        textAlign: 'center',
        marginTop: responsiveHeight(4),
        marginBottom: responsiveHeight(2),
        fontSize: responsiveFontSize(3),
    },
    pinContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: responsiveWidth(5),
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(4),
    },
    pinBox: {
        width: responsiveWidth(12),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(3),
        textAlign: "center",
        fontSize: responsiveFontSize(2.5)
      },
    biometric: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: responsiveHeight(4),
    },
    biometricText: {
        color: colors.primary,
        fontWeight: "900",
        fontSize: responsiveFontSize(2.2),
    },
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: responsiveWidth(3),
        alignItems: "center",
        width: Platform.OS === "android"
        ? responsiveWidth(82)
        : responsiveWidth(78),
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: responsiveFontSize(2.2),
    },
    bottomArea: {
        marginTop: "auto",
        marginBottom: responsiveHeight(2),
        alignItems: "center",
    }
        
});