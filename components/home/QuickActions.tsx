import { View, Text, StyleSheet, TouchableOpacity}from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Action = {
  label: string;
  icon: string;
  route: keyof RootStackParamList;
};

const actions: Action[] = [
    { label: "Transfert d'argent", icon: "send-outline", route: "Transfert" },
    { label: "Paiements de facture", icon: "document-text-outline", route: "PaiementOption" },
    { label: "Achat de crédits", icon: "phone-portrait-outline", route: "CreditOption" },
    { label: "Paiements Marchand", icon: "cart-outline", route: "DetailMarchand" },
    { label: "Retraits", icon: "download-outline", route: "RetraitDetail" },
    { label: "Me Recharger", icon: "add-circle-outline", route: "RechargeOption" },
];

const QuickActions = () => {

  const navigation = useNavigation<NavigationProp>();
  return (
        <View style={styles.container}>
            {actions.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.action}
                  onPress={() => navigation.navigate(item.route as any)}
                >
                    <View style={styles.iconContainer}>
                        <Ionicons name={item.icon as any} size={moderateScale(22)} color="#2A4793"/>
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default QuickActions;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: verticalScale(10),
      paddingHorizontal: scale(20),
    },
  
    action: {
      alignItems: "center",
      width: "30%",
      marginBottom: verticalScale(10),
    },
  
    iconContainer: {
      width: scale(50),
      height: scale(50),
      borderRadius: moderateScale(50),
      backgroundColor: "#E8ECF5",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: verticalScale(5),
    },
  
    label: {
      fontSize: moderateScale(13),
      fontWeight: "500",
      color: "#111827",
      textAlign: "center",
    },
  });
  