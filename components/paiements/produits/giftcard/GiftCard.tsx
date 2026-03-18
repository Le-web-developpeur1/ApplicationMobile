import { RootStackParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import  Header  from '@/components/Headers';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const countries = [
  "Afrique du Sud", "Algérie", "Allemagne", "Angola", "Arabie Saoudite", "Argentine",
  "Australie", "Belgique", "Bénin", "Brésil", "Burkina Faso", "Cameroun", "Canada",
  "Chine", "Chypre", "Congo", "Congo (République démocratique du)", "Corée (République de)",
  "Cote d'Ivoire", "Danemark", "Egypte", "Emirats arabes unis", "Espagne", "France",
  "Gabon", "Gambie", "Ghana", "Grèce", "Guinée-Bissau", "Guinée équatoriale", "Hong Kong",
  "Inde", "Indonésie", "Irlande", "Italie", "Japon", "Kenya", "Liberia", "Luxembourg",
  "Malaisie", "Mali", "Maroc", "Mauritanie", "Mozambique", "Niger", "Nigéria", "Norvège",
  "Pakistan", "Pays-Bas", "Pologne", "Portugal", "Royaume-Uni", "Sénégal", "Sierra Leone",
  "Suisse", "Suède", "Thaïlande", "Togo", "Tunisie", "Turquie", "Ukraine", "États-Unis"
];

export default function GiftCard() {

  const navigation = useNavigation<NavigationProp>();
    
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter(c =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
        <Header title="Gift Card"/>
        <SafeAreaView style={styles.safe}>
            <Text style={styles.subtitle}>Veuillez choisir un Pays</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Nom du Pays"
                value={search}
                onChangeText={setSearch}
            />

            <ScrollView style={styles.list}>
                {filteredCountries.map((country, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.item}
                    onPress={() => navigation.navigate("GiftCardService", { country })}
                >
                    <Text style={styles.itemText}>{country}</Text>
                </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: scale(15),
  },
  subtitle: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginBottom: verticalScale(15),
    color: "#333",
    textAlign: "center"
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(8),
    fontSize: moderateScale(14),
    marginBottom: verticalScale(10),
  },
  list: {
    flex: 1,
    paddingHorizontal: scale(10)
  },
  item: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: moderateScale(15),
    color: "#000",
  },
});
