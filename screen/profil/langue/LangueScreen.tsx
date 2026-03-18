import Header from "@/components/Headers";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useState } from "react";

export default function LangueScreen() {
    const [checked, setChecked] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Header title="Changer de langue"/>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                        <View style={[styles.checkbox, checked && styles.checked]}>
                            {checked && <View style={styles.innerDot}/>}
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Français</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                        <View style={[styles.checkbox, checked && styles.checked]}>
                            {checked && <View style={styles.innerDot}/>}
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Anglais</Text>
                </View>

            </View>
            <TouchableOpacity 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Changer de langue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: verticalScale(60),
        gap: scale(60)
    },
    row: {
        flexDirection: "row",
        marginBottom: verticalScale(2),
        width: scale(70),
        paddingHorizontal: scale(2),
        alignItems: "center",
        gap: scale(2)
    },
    checkbox: {
        height: verticalScale(18),
        width: scale(18),
        borderRadius: moderateScale(2),
        borderWidth: scale(2),
        borderColor: "#2A4793",
        justifyContent: "center",
        alignItems: "center",
        marginRight: scale(3),
    },
    checked: {
        backgroundClip: "#2A4793",
    },
    innerDot: {
        width: scale(2.5),
        height: verticalScale(2.5),
        backgroundColor: "white",
        borderRadius: moderateScale(1),
    },
    text: {
        fontSize: moderateScale(18),
        color: "#2A4793",
    },
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(4),
        borderRadius: moderateScale(8),
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(70),
        marginLeft: scale(50),
        marginRight: scale(40),
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: moderateScale(18),
    },
});