import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import Header from "@/components/Headers";
import { RootStackParamList } from "@/navigation/types";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome6 } from "@expo/vector-icons";
import { formatter } from "@/constants/formatter";
import { handleContactsPermission } from "@/utils/permissionHandler";
import { SafeAreaView } from "react-native-safe-area-context";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type DetailsInterRouteProp = RouteProp<RootStackParamList, "DetailsInternational">;

export default function DetailsInternational() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DetailsInterRouteProp>();
  const { country } = route.params as { country: string };

  const [phone, setPhone] = useState( route.params?.phone || "");
  const [name, setName] = useState(route.params?.name || "");

  const [gnf, setGnf] = useState("");
  const [xof, setXof] = useState("");

  const [fraisValue, setFraisValue] = useState(0);
  const [taxeValue, setTaxeValue] = useState(0);
  const [montantFacturer, setMontantFacturer] = useState(0);

  const [calcul, setCalcul] = useState(false);

  const tauxValue = 0.5;

  const handleGnfChange = (val: string) => {
    setGnf(val);
    const recu = Number(val);
    if (!isNaN(recu)) {
      setXof((recu * tauxValue).toString());
    }
  };

  const handleXofChange = (val: string) => {
    setXof(val);
    const recu = Number(val);
    if (!isNaN(recu)) {
      setGnf((recu / tauxValue).toString());
    }
  };

  const handleCalcul = () => {
    const recu = Number(gnf);
    const frais = recu * 0.01;
    const taxe = 0;
    const facturer = recu + taxe + frais;
    
    setFraisValue(frais);
    setTaxeValue(taxe);
    setMontantFacturer(facturer);
    setCalcul(true);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
      <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <Header title="Transfert d'argent" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: verticalScale(20) }}>
          <View style={styles.container}>
            <Text style={styles.title}>Détails du bénéficiaire</Text>
            <TextInput 
                style={[styles.input, styles.inputWrapper]} 
                value={country} 
                editable={false} 
            />

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Numéro du bénéficiaire"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
              <TouchableOpacity
                onPress={() => handleContactsPermission(navigation, "DetailsInternational")}
              >
                <FontAwesome6 name="user" size={moderateScale(20)} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Prénom et Nom"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Montant en GNF"
                keyboardType="numeric"
                value={gnf}
                onChangeText={handleGnfChange}
              />
              <Text style={styles.icon}>GNF</Text>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Montant en XOF"
                keyboardType="numeric"
                value={xof}
                onChangeText={handleXofChange}
              />
              <Text style={styles.icon}>XOF</Text>
            </View>

            <View style={styles.frais}>
              <Text style={styles.text}>Taux de change : {tauxValue}</Text>
              <Text style={styles.text}>Frais : {formatter.format(fraisValue)} GNF</Text>
              <Text style={styles.text}>Taxe : {taxeValue}</Text>
              <Text style={styles.text}>Montant à facturer : {formatter.format(montantFacturer)} GNF</Text>
            </View>

            {!calcul ? (
              <TouchableOpacity style={styles.button} onPress={handleCalcul}>
                <Text style={styles.buttonText}>Calculer</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("ConfirmationInter", {
                    gnf,
                    xof,
                    fraisValue,
                    tauxValue,
                    phone,
                    name,
                  })
                }
              >
                <Text style={styles.buttonText}>Suivant</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginBottom: verticalScale(3),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: moderateScale(1),
    borderColor: "#ccc",
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(10),
    backgroundColor: "#fff",
    marginVertical: verticalScale(6),
  },
  icon: {
    marginRight: scale(8),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
    color: "#000",
    paddingVertical: verticalScale(12),
  },
  button: {
    backgroundColor: "#2A4793",
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(8),
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: moderateScale(18),
  },
  frais: {
    backgroundColor: "#0069FF1A",
    padding: scale(10),
    gap: verticalScale(10),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(8),
  },
  text: {
    fontWeight: "bold",
    fontSize: moderateScale(17),
    color: "#2A4793",
  },
});
