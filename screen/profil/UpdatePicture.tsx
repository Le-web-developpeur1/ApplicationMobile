import React, { useState } from "react";
import Header from "@/components/Headers";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { askStoragePermission } from "@/utils/permissions";

export default function UpdatePicture() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        console.log("Bouton pressé !");
        try {
          const status = await askStoragePermission();
          console.log("Permission status:", status);
      
          if (status !== "granted") {
            alert("Permission refusée pour accéder aux images !");
            return;
          }
      
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "images",
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });
      
          console.log("ImagePicker result:", result);
      
          if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
        } catch (error) {
          console.error("Erreur pickImage:", error);
        }
      };
      

    return (
        <View style={{ flex: 1 }}>
            <Header title="Modifier la photo de profile"/>
            <View style={styles.container}>
                <Text style={styles.text}>Votre photo de profile acutelle</Text>
                <View style={styles.cardImage}>
                    {image && <Image source={{ uri: image }} style={styles.image}/>}
                    <Text style={styles.name}>Boubacar Bah</Text>
                </View>
                <Text style={styles.text}>Selectioner votre nouvelle photo de profile</Text>
                <TouchableOpacity
                    style={styles.storage}
                    onPress={pickImage}
                >
                    <MaterialIcons name="image" color={"#2A4793"} size={scale(35)}/>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.retour}
                    >
                        <Text style={styles.textRetour}>Retour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.confirmer}
                    >
                        <Text style={styles.confirmerText}>Confirmer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(20),
        gap: scale(15)
    },
    text: {
        fontSize: moderateScale(20),
        paddingHorizontal: scale(50),
        textAlign: "center"
    },
    cardImage: {
        backgroundColor: "#2A4793",
        height: verticalScale(200),
        width: scale(350),
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: verticalScale(60),
        width: scale(60),
        borderRadius: moderateScale(60),
    },
    name: {
        color: "white",
        fontSize: moderateScale(20),
        fontWeight: "bold",
    },
    storage: {
        backgroundColor: "#F7CE47",
        height: verticalScale(60),
        width: scale(120),
        borderRadius: moderateScale(20),
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        gap: scale(30),
        marginTop: verticalScale(10)
    },
    retour: {
        backgroundColor: "#2A4793",
        height: verticalScale(50),
        borderRadius: moderateScale(10),
        width: scale(120),
        justifyContent: "center",
        alignItems: "center",
    },
    textRetour: {
        color: "white",
        fontSize: moderateScale(16),
        fontWeight: "bold",
    },
    confirmer: {
        borderColor: "#2A4793",
        borderWidth: scale(1),
        height: verticalScale(50),
        borderRadius: moderateScale(10),
        width: scale(120),
        justifyContent: "center",
        alignItems: "center",
    },
    confirmerText: {
        color: "#2A4793",
        fontSize: moderateScale(16),
        fontWeight: "bold",
    },
});