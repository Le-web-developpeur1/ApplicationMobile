import Headers from "@/components/Headers";
import PaiementOption from "@/components/paiements/PaiementOption";
import { View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaiementScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
      <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
        <Headers title={"Paiement"}/>
        <PaiementOption/>
      </View>
    </SafeAreaView>
  );
}


