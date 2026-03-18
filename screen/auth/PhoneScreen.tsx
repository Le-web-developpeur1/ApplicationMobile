import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import CountryPicker  from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions/src";

const phoneLengths = {
    GN: 9,
    SN: 9,
    CI: 10,
    ML: 8,
    FR: 9,
};

export default function PhoneScreen({navigation}) {

    const [country, setCountry] = useState({
        cca2: "GN",
        callingCode: ["224"],
    });

    const [phone, setPhone] = useState("");

    const handlePhoneChange = (value) => {
        const maxLength = phoneLengths[country.cca2] || 12;
        if (value.length <= maxLength ) {
            setPhone(value);
        }
    }

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <SafeAreaView style={styles.safe}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between"}}
                    keyboardShouldPersistTaps="handled"
                >


                    <View style={styles.container}>

                        <TouchableOpacity style={styles.countryBox}>
                            <CountryPicker
                                withFilter
                                withFlag
                                withCallingCode
                                withEmoji
                                countryCode={country.cca2 as any} 
                                onSelect={(c) => setCountry(c)}
                            />
                            <Text style={styles.callingCode}>+{country.callingCode}</Text>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            placeholder="Numéro de téléphone"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={handlePhoneChange}
                        />
                    </View>

                    <View style={styles.bottomArea}>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigation.navigate("Register", {phone})}
                        >
                            <Text style={styles.buttonText}>Continuer</Text>
                        </TouchableOpacity> 
                        <Text style={styles.smallInfo}>En cliquant sur ce bouton, vous confirmez avoir lu et accepté les Termes et Conditions et la Politique de Confidentialité de la société et que vous avez atteint l'âge légal.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#D1D5D8",
        borderRadius: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(3),
        height: responsiveHeight(6),
        backgroundColor: "#F9FAFB",
        width: responsiveWidth(85),
        alignSelf: "center",
        marginTop: responsiveHeight(3),
    },
    countryBox: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: responsiveWidth(3),
    },
    callingCode: {
        fontSize: responsiveFontSize(2),
        fontWeight: "600",
        marginLeft: responsiveWidth(1.5),
    },
    input: {
        flex: 1,
        fontSize: responsiveFontSize(2),
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
    smallInfo: { 
        marginTop: responsiveHeight(1.5), 
        fontSize: responsiveFontSize(1.5), 
        color: "#6B7280",
        textAlign: "center",
        paddingHorizontal: responsiveWidth(4),
        width: Platform.OS === "android"
        ? responsiveWidth(82)
        : responsiveWidth(78),
        alignSelf: "center"
    },
    bottomArea: {
        width: "100%",
        alignItems: "center",
        marginBottom: Platform.OS === "android" 
            ? responsiveHeight(0.5) : 
            responsiveHeight(1.5)
        ,
      },
})