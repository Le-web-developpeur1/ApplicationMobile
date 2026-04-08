import { FlatList, Image, View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const annonces = [
  { id: "1", image: require("@/assets/images/LogoCashMoov.png"), title: "Promo CashMoov" },
  { id: "2", image: require("@/assets/images/LogoCashMoov.png"), title: "Orange Money Bonus" },
  { id: "3", image: require("@/assets/images/LogoCashMoov.png"), title: "Nouveau Service MTN" },
];

export default function Annonce() {
  return (
    <FlatList
      data={annonces}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: scale(300),
    height: verticalScale(150),
    marginRight: scale(10),
    borderRadius: scale(10),
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
    bottom: verticalScale(10),
    left: scale(10),
    color: "#fff",
    fontWeight: "bold",
    fontSize: scale(16),
  },
});
