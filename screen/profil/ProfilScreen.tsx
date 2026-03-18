import { View, Text } from "react-native";
import Header from "@/components/Headers";
import ProfilSection from "@/components/profil/ProfilSection";
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Mon compte"/>
      <ProfilSection/>
    </View>
  );
}
