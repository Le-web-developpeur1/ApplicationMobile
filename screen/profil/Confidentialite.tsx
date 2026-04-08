import { View, Text, StyleSheet, Switch } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { useState } from "react";
import Header from "@/components/Headers";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Confidentialite() {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
            <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
                <Header title="Confidentialité"/>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Cette action nécessite une authentification biometrique.
                        La Protection des données sensibles n'est pas active.
                    </Text>
                    <View style={styles.toogle}>
                        <Text style={styles.label}>Activer la protection</Text>
                        <View style={styles.switchWrapper}>
                            <Switch
                            trackColor={{ false: "#767577", true: "#4cd137" }}
                            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginTop: verticalScale(20),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(10),
    },
    title: {
        fontWeight: "bold",
        fontSize: moderateScale(20),
        color: "#2A4793",
        textAlign: "center",
        paddingTop: verticalScale(20),
    },
    toogle: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: scale(23),
        backgroundColor: "#0069FF1A",
        height: verticalScale(66),
        width: scale(300),
        borderRadius: moderateScale(12),
        paddingHorizontal: scale(20),
        marginTop: verticalScale(40)
    },
    label: {
        fontSize: moderateScale(18),
        color: "#2A4793",
        fontWeight: "600",
    },
    switchWrapper: {
        transform: [{ scale: 1.5 }], // agrandit le switch (1.5 = 150%)
      },
});