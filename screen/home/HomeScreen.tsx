import { View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "@/components/home/Header";
import BalanceCard from "@/components/home/BalanceCard";
import QuickActions from "@/components/home/QuickActions";
import Services from "@/components/home/Services";
import RecentTransactions from "@/components/home/RecentTransactions";
import { verticalScale } from "react-native-size-matters";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793" }}>
        <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
          <Header username="Boubacar" />
          <BalanceCard />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: verticalScale(60) }}
          >
            <QuickActions />
            <Services />
            <RecentTransactions />
          </ScrollView>
        </View>
      </SafeAreaView>
  );
}
