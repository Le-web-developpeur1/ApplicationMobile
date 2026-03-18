import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./AuthNavigator";
import AppWithTabs from './AppWithTabs';
import { UserInactivityProvider } from '@/context/UserInactivity';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <UserInactivityProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {!isLoggedIn && (
            <Stack.Screen name="Auth">
              {(props) => (
                <AuthNavigator {...props} setIsLoggedIn={setIsLoggedIn} />
              )}
            </Stack.Screen>
          )}

          {isLoggedIn && (
            <Stack.Screen name="App" component={AppWithTabs} />
          )}


        </Stack.Navigator>
      </UserInactivityProvider>
    </NavigationContainer>
  );
}
