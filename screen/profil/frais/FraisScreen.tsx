import { View } from "react-native";
import Header from "@/components/Headers";
import FraisSection from "@/components/profil/frais/FraisSection";

export default function FraisScreen() {

    return (
        <View style={{ flex: 1 }}>
            <Header title="Frais de service"/>
            <FraisSection/>
        </View>
    )
}