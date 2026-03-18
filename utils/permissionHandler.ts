import { Alert } from "react-native";
import { askCameraPermission, askContactsPermission } from "./permissions";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const handleContactsPermission = async (
  navigation: NavigationProp,
  returnTo: keyof RootStackParamList
) => {
  const result = await askContactsPermission();

  if (result === "granted") {
    navigation.navigate("ContactScreen", { returnTo });
  } else if (result === "denied") {
    Alert.alert("Permission refusée", "Impossible d'accéder aux contacts.");
  } else {
    Alert.alert(
      "Permission bloquée",
      "Va dans les paramètres pour activer l'accès aux contacts."
    );
  }
};

export const handleQrPermission = async (
  navigation: NavigationProp,
  returnTo: keyof RootStackParamList
) => {
  const status = await askCameraPermission();
  if (status) {
    navigation.navigate("QrScanner", { returnTo });
  } else {
    Alert.alert(
      "Permission caméra refusée",
      "Impossible d'accéder à la caméra pour scanner le QR code."
    );
  }
};
