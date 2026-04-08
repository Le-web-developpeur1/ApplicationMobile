import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import * as Haptics from "expo-haptics";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from "react-native-reanimated";
import * as LocalAuthentication from "expo-local-authentication";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const ServiceOTP = () => {
    const [code, setCode] = useState<number[]>([]);
    const codeLength = Array(6).fill(0);

    const navigation = useNavigation<NavigationProp>();

    const offset = useSharedValue(0);
    const style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value}]
        }
    });
    
    const OFFSET = 20;
    const TIME = 80;

    useEffect(() => {
        if (code.length === 6) {
            if (code.join("") === "123456") {
                navigation.navigate("Tabs");
                setCode([]);
            } else {
                offset.value = withSequence(
                    withTiming(-OFFSET, { duration: TIME/2}),
                    withRepeat(withTiming(OFFSET, { duration: TIME/2}), 4, true),
                    withTiming(0, {duration: TIME/2})
                );
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                setCode([]);
            }
        }
    }, [code])

    const onNumberPress = (number: number) => {
        if (code.length < 6) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setCode([...code, number]);
        }
    };

    const onBackspacePress = () => {
        if (code.length > 0) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setCode(code.slice(0, -1));
        }
    };

    const onBiometricPress = async () => {
        const { success } = await LocalAuthentication.authenticateAsync();
        if (success) {
            navigation.navigate("Tabs");
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.greeting}>Welcome Back, Boubacar</Text>

            <Animated.View style={[styles.codeView, style]}>
                {codeLength.map((_, index) => (
                    <View 
                        key={index} 
                        style={[
                            styles.codeEmpty, {
                                backgroundColor: code[index] !== undefined ? "#2A4793" : "transparent"
                            }
                        ]}
                    />
                ))}
            </Animated.View>

            <View style={styles.numberGrid}>
                <View style={styles.numberView}>
                    {[1, 2, 3].map((number) => (
                        <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
                            <Text style={styles.number}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numberView}>
                    {[4, 5, 6].map((number) => (
                        <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
                            <Text style={styles.number}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numberView}>
                    {[7, 8, 9].map((number) => (
                        <TouchableOpacity key={number} onPress={() => onNumberPress(number)}>
                            <Text style={styles.number}>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            <View style={styles.numberView}>
                <TouchableOpacity onPress={() => onBiometricPress()}>
                    <MaterialCommunityIcons name="face-recognition" size={30} color="#2A4793"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onNumberPress(0)}>
                    <Text style={styles.number}>0</Text>
                </TouchableOpacity>

                <View style={{minWidth: scale(30)}}>
                    {code.length > 0 && (
                    <TouchableOpacity onPress={() => onBackspacePress()}>
                        <MaterialCommunityIcons name="backspace-outline" size={scale(30)} color="#000"/>
                    </TouchableOpacity>
                    )}
                </View>
            </View>
            </View>

        </SafeAreaView>
    );
}

export default ServiceOTP;

const styles = StyleSheet.create({
    greeting: {
        fontSize: moderateScale(24),
        fontWeight: "bold",
        marginTop: verticalScale(70),
        alignSelf: "center",
    },
    codeView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: scale(20),
        marginVertical: verticalScale(60),
    },
    codeEmpty: {
        width: scale(20),
        height: verticalScale(20),
        borderRadius: moderateScale(10),
        borderWidth: scale(1),
        borderColor: "#2A4793",
    },
    numberGrid: {
        marginHorizontal: scale(60),
        gap: scale(60),
    },
    numberView: { 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    number: {
        fontSize: moderateScale(32),
    },
})