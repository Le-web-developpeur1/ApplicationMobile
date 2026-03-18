import { useNavigation } from "@react-navigation/native";
import React, {useRef, useEffect} from "react"
import { View, AppState, AppStateStatus, Platform } from "react-native"
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const LOCK_TIME = 3000;

export const UserInactivityProvider = ({children} : React.PropsWithChildren) => {
    const appState = useRef(AppState.currentState);
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        const subscription = AppState.addEventListener("change", handleAppStateChange);

        return () => {
            subscription.remove();
        };
    }, []);

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        console.log("appState", appState.current, nextAppState);

        if (
            nextAppState === "inactive" ||
            (Platform.OS === "android" && nextAppState === "background")
        ) {
            navigation.navigate("Overlay");
        }

        if (nextAppState === "background") {
            recordStartTime();
        } else if (nextAppState === "active" && appState.current === "background") {
            const checkInactivity = async () => {
                const value = await SecureStore.getItemAsync('startTime');
                const startTime = value ? parseInt(value, 10) : null;

                if (startTime && Date.now() - startTime > LOCK_TIME) {
                    navigation.navigate("ServiceOTP");
                }
            };
            checkInactivity();
        }

        appState.current = nextAppState;
    };

    const recordStartTime = async () => {
        await SecureStore.setItemAsync("startTime", Date.now().toString());
    }

    return <>{children}</>
}