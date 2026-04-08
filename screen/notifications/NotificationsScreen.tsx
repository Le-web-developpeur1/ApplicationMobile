import Header from "@/components/Headers";
import NotificationSection from "@/components/notification/NotificationSection";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
      <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <Header title="Notification"/>
      <NotificationSection/>
    </View>
    </SafeAreaView>
  );
}