import Headers from "@/components/Headers";
import PaiementOption from "@/components/paiements/PaiementOption";
import { View} from "react-native";

export default function PaiementScreen() {
  return (
    <View style={{ flex: 1}}>
      <Headers title={"Paiement"}/>
      <PaiementOption/>
    </View>
  );
}


