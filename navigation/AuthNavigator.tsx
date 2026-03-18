import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

import Onboarding1 from "@/screen/onboarding/Onboarding1";
import Onboarding2 from "@/screen/onboarding/Onboarding2";
import Onboarding3 from "@/screen/onboarding/Onboarding3";

import PhoneScreen from "@/screen/auth/PhoneScreen";
import PinScreen from "@/screen/auth/PinScreen";
import RegisterScreen from "@/screen/auth/RegisterScreen";

type AuthNavigatorProps = { 
    setIsLoggedIn: (value: boolean) => void; 
};

const Stack = createStackNavigator();

export default function AuthNavigator({ setIsLoggedIn}: AuthNavigatorProps) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding1" component={Onboarding1}/>
            <Stack.Screen name="Onboarding2" component={Onboarding2}/>
            <Stack.Screen name="Onboarding3" component={Onboarding3}/>

            <Stack.Screen name="Phone" component={PhoneScreen}/>

            <Stack.Screen name="Pin">
                {(props: any) => <PinScreen {...props} setIsLoggedIn ={setIsLoggedIn}/>}
            </Stack.Screen>

            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}