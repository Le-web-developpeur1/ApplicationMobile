import React, { useState } from "react";
import Header from "@/components/Headers";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UpdatePicture() {
    const [image, setImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const pickFromGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
        setModalVisible(false);
      };
    
      const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
        setModalVisible(false);
      };
      
    const imageActu = "https://s3-alpha.figma.com/profile/79207c4d-bd0d-4480-8449-f5ff7527c971";

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#2A4793"}}>
          <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
              <Header title="Modifier la photo de profile"/>
              <View style={styles.container}>
                  <Text style={styles.text}>Votre photo de profile acutelle</Text>
                  <View style={styles.cardImage}>
                      {image && <Image source={{ uri: image }} style={styles.image}/> || <Image source={{ uri: imageActu }} style={styles.image}/>}
                      <Text style={styles.name}>Boubacar Bah</Text>
                  </View>
                  <Text style={styles.text}>Selectioner votre nouvelle photo de profile</Text>
                  <TouchableOpacity
                      style={styles.storage}
                      onPress={() => setModalVisible(true)}
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
                  <Modal
                      transparent={true}
                      visible={modalVisible}
                      animationType="slide"
                      onRequestClose={() => setModalVisible(false)}
                  >
                      <View style={styles.modalContainer}>
                          <View style={styles.modalContent}>
                              <Text style={styles.modalTitle}>Choisissez une option</Text>
                              <TouchableOpacity style={styles.option} onPress={takePhoto}>
                                <Text style={styles.optionText}>Prendre une photo</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.option} onPress={pickFromGallery}>
                                <Text style={styles.optionText}>Sélectionner dans la galerie</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={[styles.option, { backgroundColor: "#ccc" }]}
                                onPress={() => setModalVisible(false)}
                              >
                                <Text style={styles.optionText}>Annuler</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </Modal>
              </View>
          </View>
        </SafeAreaView>
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
        height: verticalScale(130),
        width: scale(130),
        borderRadius: moderateScale(130),
        marginBottom: verticalScale(15)
    },
    name: {
        color: "white",
        fontSize: moderateScale(30),
        fontWeight: "bold",
        justifyContent: "space-between"
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
      },
      option: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#2A4793",
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
      },
      optionText: {
        color: "white",
        fontSize: 16,
      },
});