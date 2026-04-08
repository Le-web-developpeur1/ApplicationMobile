import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/types";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


interface HeaderProps {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={moderateScale(24)}  style={styles.iconWrapper}/>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Tabs")}>
        <MaterialIcons name="home" size={moderateScale(24)}  style={styles.iconWrapper}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
    backgroundColor: "#2A4793",
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: Platform.OS === "android" ? moderateScale(22) : moderateScale(18),
    fontWeight: "bold",
    color: "#ffffff",
  },
  option: { 
    alignItems: "center", 
    justifyContent: "center", 
  }, 
  iconWrapper: { 
    borderWidth: moderateScale(2), 
    borderColor: "#ffffff1A",
    borderRadius: moderateScale(12),
    padding: scale(6),
    color: "#ffffff33",
  }, 
});
