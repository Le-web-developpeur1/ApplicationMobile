import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const BalanceCard = () => {
  const [hiddenDisponible, setHiddenDisponible] = useState(true);
  const [hiddenReserve, setHiddenReserve] = useState(true);

  return (
    <View style={styles.card}>
      <View style={styles.row}>

        <View style={styles.column}>
          <Text style={styles.label}>Solde disponible</Text>

          <Text style={styles.amountSmall}>
            {hiddenDisponible ? "••••••" : "12 265 749 GNF"}
          </Text>

          <TouchableOpacity onPress={() => setHiddenDisponible(!hiddenDisponible)}>
            <Ionicons
              name={hiddenDisponible ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>Solde réservé</Text>

          <Text style={styles.amountSmall}>
                {hiddenReserve ? "••••••" : "2 500 000 GNF"}
          </Text>

          <TouchableOpacity onPress={() => setHiddenReserve(!hiddenReserve)}>
            <Ionicons
              name={hiddenReserve ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"

            />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: scale(8),
    borderRadius: moderateScale(20),
    marginHorizontal: scale(22),
    marginTop: verticalScale(-85),
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: moderateScale(8),
    shadowOffset: { width: 0, height: verticalScale(4) },
    elevation: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: scale(10),
  },

  column: {
    flex: 1, 
    backgroundColor: "#F9FAFB", 
    padding: scale(7), 
    borderRadius: moderateScale(12), 
  },

  label: {
    fontSize: moderateScale(14),
    color: "#6B7280",
    fontWeight: "500",

  },

  amountSmall: {
    marginVertical: verticalScale(8),
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "#111827",
  },
});
