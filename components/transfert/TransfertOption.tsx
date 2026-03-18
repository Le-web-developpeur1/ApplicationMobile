import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TransfertOptions() {

    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("National")}>
                <View style={styles.iconWrapper}>
                    <View style={styles.icon}>
                     <Ionicons name="map-outline" size={moderateScale(28)} color={"white"}/>
                    </View>
                    <Text style={styles.label}>National</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("International")}>
                <View style={styles.iconWrapper}>
                    <View style={styles.icon}>
                     <Ionicons name="globe-outline" size={moderateScale(28)} color={"white"}/>
                    </View>
                    <Text style={styles.label}>International</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: verticalScale(20),
        paddingHorizontal: scale(20),
    },
    option: {
        width: scale(120)
    },
    iconWrapper: {
        borderWidth: moderateScale(2),
        borderColor: '#2A479333',
        borderRadius: moderateScale(12),
        padding: scale(12),
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        marginTop: verticalScale(8),
        fontSize: moderateScale(15),
        fontWeight: "600",
        color: "#2A4793",
    },
    icon: {
        width: scale(40),
        height: verticalScale(40),
        borderRadius: 20,
        backgroundColor: "#0069FF",
        alignItems: "center",
        justifyContent: "center"
    }
})