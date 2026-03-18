import Header from "@/components/Headers";
import NotificationSection from "@/components/notification/NotificationSection";
import { View } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Notification"/>
      <NotificationSection/>
    </View>
  );
}