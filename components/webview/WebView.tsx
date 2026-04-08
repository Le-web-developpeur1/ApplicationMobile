import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function WebScreen() {

    const route = useRoute();
    const { url } = route.params as {
        url: string;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793" }}>
            <StatusBar style="light" backgroundColor={"#1f356d"}/>
            <WebView source={{ uri: url}} style={{ flex: 1 }}/>
        </SafeAreaView>
    );
}