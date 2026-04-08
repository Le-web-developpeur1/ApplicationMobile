import Header from "@/components/Headers";
import ServicePaiement from "@/components/paiements/ServicePaiement";
import TransfertOptions from "@/components/transfert/TransfertOption";
import { View, Text, StyleSheet, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ServicesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
      <View style={{ flex: 1, backgroundColor: "#F3F4F6"}}>
        <View style={{ flex: 1}}>
          <Header title="Partenaire"/>
          <View style={styles.container}>
            
            <Text style={styles.title}>Transfert d'argent</Text>
            <View style={styles.service}>
              <TransfertOptions/>
            </View>

            <Text style={styles.title}>Paiement</Text>
            <View style={styles.service}>
              <ServicePaiement/>
            </View>

            <Text style={styles.title}>Marchand</Text>
            <View style={styles.service}>

            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: verticalScale(10),
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(20),
  },
  service: {
    borderColor: "#2A4793",
    borderWidth: scale(1),
    height: Platform.OS === "android" ? verticalScale(143) : verticalScale(125),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(15),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginBottom: verticalScale(5),
  }
})
