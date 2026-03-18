import { View, ScrollView } from "react-native";
import Header from "@/components/home/Header";
import BalanceCard from "@/components/home/BalanceCard";
import QuickActions from "@/components/home/QuickActions";
import Services from "@/components/home/Services";
import RecentTransactions from "@/components/home/RecentTransactions";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
        <Header username="Boubacar" />
        <BalanceCard/>
        <QuickActions/>
        <Services/>
        <RecentTransactions/>
    </View>
  );
}
