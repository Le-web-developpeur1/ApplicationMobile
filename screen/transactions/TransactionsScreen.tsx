import Headers from "@/components/Headers";
import { View} from "react-native";
import TransfertOptions from "@/components/transfert/TransfertOption";

export default function TransactionsScreen() {
  return (
    <View style={{ flex: 1, paddingBottom: 80, }}>
      <Headers title={"Transfert d'argent"}/>
      <TransfertOptions/>
    </View>
  );
}


