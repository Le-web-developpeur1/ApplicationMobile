import { useState, useEffect } from "react";
import * as Contacts from "expo-contacts";
import { View, Text, FlatList, Alert, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Header from "@/components/Headers";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

const ContactScreen = ({ route, navigation}) => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filteredContact, setFilteredContact] = useState<any[]>([]);


  const { returnTo } = route.params as {
        returnTo: string;
  };

  const hadleSelectContact = (item) => {
    if (item.phoneNumbers?.length > 0) {
        navigation.navigate(returnTo, {
            phone: item.phoneNumbers[0].number,
            name: item.name,
        });
    }
  };

  useEffect(() => {
    const loadContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        setContacts(data);
        setFilteredContact(data);
      } else {
        Alert.alert("Permission refusée", "Impossible d'accéder aux contacts");
      }
    };

    loadContacts();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredContact(contacts);
    } else {
      const lowerSearch = search.toLowerCase();
      const filtered = contacts.filter(
        (c) =>
          c.name?.toLowerCase().includes(lowerSearch) ||
          (c.phoneNumbers?.length > 0 &&
            c.phoneNumbers[0].number.toLowerCase().includes(lowerSearch))
      );
      setFilteredContact(filtered);
    }
  }, [search, contacts]);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Bénéficiaire" />
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Ionicons name="search-outline" size={moderateScale(20)} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Rechercher"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <FlatList
          style={{ paddingHorizontal: scale(10)}}
          data={filteredContact}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => ( 
                <TouchableOpacity style={styles.list} onPress={() => hadleSelectContact(item)}> 
                    <View style={styles.avatar}> 
                        <Text style={styles.avatarText}> 
                            {item.name?.charAt(0).toUpperCase()} {item.name?.charAt(1).toUpperCase()} 
                        </Text> 
                    </View> 
                    <View style={styles.textWrapper}> 
                        <Text style={styles.name}>{item.name}</Text> 
                        {item.phoneNumbers?.length > 0 && ( 
                            <Text style={styles.number}>{item.phoneNumbers[0].number}</Text> 
                        )} 
                    </View> 
                </TouchableOpacity> 
            )}
        />
      </View>
    </View>
  );
};

export default ContactScreen;


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20),
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: moderateScale(1),
        borderColor: "#ccc",
        borderRadius: moderateScale(8),
        paddingHorizontal: scale(10),
        backgroundColor: "#fff",
        marginVertical: verticalScale(6),
    },
    icon: {
        marginRight: scale(8),
    },
    input: {
        flex: 1,
        fontSize: moderateScale(16),
        color: "#000",
        paddingVertical: verticalScale(12),
    },
    list: { 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "#fff", 
        paddingVertical: verticalScale(12), 
        paddingHorizontal: scale(14), 
        borderRadius: moderateScale(8), 
        marginBottom: verticalScale(8), 
        shadowColor: "#000", 
        shadowOpacity: 0.05, 
        shadowRadius: 3, 
        elevation: 1, 
    }, 
    avatar: { 
        width: scale(40), 
        height: scale(40), 
        borderRadius: scale(20), 
        backgroundColor: "#F7CE47", 
        alignItems: "center", 
        justifyContent: "center", 
        marginRight: scale(12), 
    },
    avatarText: { 
        color: "#2A4793", 
        fontWeight: "bold", 
        fontSize: moderateScale(18),
    }, 
    textWrapper: { 
        flexDirection: "column", 
        flex: 1, 
    }, 
    name: { 
        fontWeight: "600", 
        fontSize: moderateScale(18), 
        color: "#000", 
    }, 
    number: { 
        fontSize: moderateScale(16), 
        color: "#555", 
        marginTop: verticalScale(2), 
    },
})