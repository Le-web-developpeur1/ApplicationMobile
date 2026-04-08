import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import AuthNavigator from "./AuthNavigator";
import AppWithTabs from './AppWithTabs';
import { UserInactivityProvider } from '@/context/UserInactivity';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation d'une vérification (token, storage, API, etc.)
    setTimeout(() => {
      // Ici tu peux vérifier AsyncStorage ou SecureStore
      // et mettre isLoggedIn = true si un token est valide
      setIsLoggedIn(false); 
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Chargement...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <UserInactivityProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {!isLoggedIn ? (
            <Stack.Screen name="Auth">
              {(props) => (
                <AuthNavigator {...props} setIsLoggedIn={setIsLoggedIn} />
              )}
            </Stack.Screen>
          ) :  (
            <Stack.Screen name="App" component={AppWithTabs} />
          )}

        </Stack.Navigator>
      </UserInactivityProvider>
    </NavigationContainer>
  );
}
