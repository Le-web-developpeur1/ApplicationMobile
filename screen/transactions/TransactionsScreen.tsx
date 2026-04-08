import Headers from "@/components/Headers";
import { View} from "react-native";
import TransfertOptions from "@/components/transfert/TransfertOption";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
      <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
        <Headers title={"Transfert d'argent"}/>
        <TransfertOptions/>
      </View>
    </SafeAreaView>
  );
}


