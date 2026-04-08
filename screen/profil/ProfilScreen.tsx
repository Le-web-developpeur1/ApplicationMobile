import { View, Text } from "react-native";
import Header from "@/components/Headers";
import ProfilSection from "@/components/profil/ProfilSection";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
      <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <Header title="Mon compte"/>
      <ProfilSection/>
    </View>
    </SafeAreaView>
  );
}
