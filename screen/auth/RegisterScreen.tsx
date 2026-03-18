import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, StyleSheet, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import  DropDownPicker  from "react-native-dropdown-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRegisterDropdowns } from "@/constants/dropdowns";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions/src";

export default function RegisterScreen({navigation}) {
    const [checked, setChecked] = useState(false);
    const route = useRoute();
    const { phone } = route.params as { phone: string };

    const {
        openSexe, setOpenSexe, sexe, setSexe, sexeItems, setSexeItems,
        openRegion, setOpenRegion, region, setRegion, regionItems, setRegionItems,
        openVille, setOpenVille, ville, setVille, villeItems, setVilleItems,
        openPiece, setOpenPiece, piece, setPiece, pieceItems, setPieceItems,
        openProfession, setOpenProfession, profession, setProfession, professionItems, setProfessionItems, 
    } = useRegisterDropdowns();
    
  
    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAwareScrollView 
                enableOnAndroid={true}
                extraScrollHeight={100}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                <View style={styles.container}>
                    <TextInput
                        style={[styles.fieldBase, styles.input, {fontSize: 25}]}
                        value={phone || ""}
                        editable={false}
                    />
                    <TextInput
                        style={[styles.fieldBase, styles.input]}
                        placeholder="Prénom*"

                    />
                    <TextInput
                        style={[styles.fieldBase, styles.input]}
                        placeholder="Nom de famille*"
                    />
                    <TextInput
                        style={[styles.fieldBase, styles.input]}
                        placeholder="Email"
                    />
                    <View style={{ zIndex: 5000, width: responsiveWidth(85), alignSelf: "center" }}>
                        <DropDownPicker
                            open={openRegion}
                            value={region}
                            items={regionItems}
                            setOpen={setOpenRegion}
                            setValue={setRegion}
                            setItems={setRegionItems}
                            style={[styles.fieldBase, styles.dropdown]}
                            placeholder="Choisissez une région*"
                            dropDownContainerStyle={styles.dropdownContainer}
                        />
                    </View>
                    <View style={{ zIndex: 4000, width: responsiveWidth(85), alignSelf: "center" }}>
                        <DropDownPicker
                             open={openVille}
                             value={ville}
                             items={villeItems}
                             setOpen={setOpenVille}
                             setValue={setVille}
                             setItems={setVilleItems}
                             style={[styles.fieldBase, styles.dropdown]}
                             placeholder="Sélectionnez la ville*"
                             dropDownContainerStyle={styles.dropdownContainer}
                         />
                    </View>
                    <TextInput
                        style={[styles.fieldBase, styles.input]}
                        placeholder="Adresse*"
                    />
                    <View style={{ zIndex: 3000, width: responsiveWidth(85), alignSelf: "center" }}>
                        <DropDownPicker
                            open={openSexe}
                            value={sexe}
                            items={sexeItems}
                            setOpen={setOpenSexe}
                            setValue={setSexe}
                            setItems={setSexeItems}
                            style={[styles.fieldBase, styles.dropdown]}
                            placeholder="Sélectionnez le sexe*"
                            dropDownContainerStyle={styles.dropdownContainer}
                        />
                    </View>
                    <View style={{ zIndex: 2000, width: responsiveWidth(85), alignSelf: "center" }}>
                        <DropDownPicker
                              open={openPiece}
                              value={piece}
                              items={pieceItems}
                              setOpen={setOpenPiece}
                              setValue={setPiece}
                              setItems={setPieceItems}
                              style={[styles.fieldBase, styles.dropdown]}
                              placeholder="Sélectionnez le type de pièce*"
                              dropDownContainerStyle={styles.dropdownContainer}
                          />
                    </View>
                    <TextInput
                        style={[styles.fieldBase, styles.input]}
                        placeholder="Numéro de la pièce*"
                    />
                    <View style={{ zIndex: 1000, width: responsiveWidth(85), alignSelf: "center" }}>
                        <DropDownPicker
                            open={openProfession}
                            value={profession}
                            items={professionItems}
                            setOpen={setOpenProfession}
                            setValue={setProfession}
                            setItems={setProfessionItems}

                            style={[styles.fieldBase, styles.dropdown]}
                            dropDownContainerStyle={styles.dropdownContainer}

                            labelStyle={styles.dropdownLabel}
                            listItemContainerStyle={styles.dropdownItem}
                            listItemLabelStyle= {styles.dropdownItemLabel}

                            dropDownDirection="BOTTOM"
                            listMode="SCROLLVIEW"
                            autoScroll={true}
                            placeholder="Sélectionnez la profession*"
                        />
                    </View>
                    <TextInput
                        style={[styles.fieldBase, styles.input]}
                        placeholder="Date de naissance*"
                    />
                    
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => setChecked(!checked)}>
                            <View style={[styles.checkbox, checked && styles.checkedBox]}>
                                {checked && <View  style={styles.innerDot}/>}
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.text}>
                            J'accepte les{" "}
                            <Text 
                                style={styles.link}
                                onPress={() => Linking.openURL('https://example.com/termscm')}
                            >
                                Conditions générales
                            </Text>
                        </Text>

                    </View>
                    <TouchableOpacity style={styles.button}     onPress={() => navigation.navigate("Pin")}>
                        <Text style={styles.buttonText}>Continuer</Text>
                    </TouchableOpacity> 
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#F2F4F7",
    },
    container: {
        marginTop: responsiveHeight(2),
        alignItems: "center",
    },
    fieldBase: { 
        width: responsiveWidth(85), 
        borderRadius: responsiveWidth(3), 
        backgroundColor: "#FFFFFF", 
        borderWidth: 1, 
        borderColor: "#D1D5D8", 
        paddingHorizontal: responsiveWidth(4), 
        paddingVertical: responsiveHeight(1.2),
        justifyContent: "center", 
        marginBottom: responsiveHeight(2), 
    },
    input: {
        fontSize: responsiveFontSize(2.2), 
        height: responsiveHeight(6.5),
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: responsiveHeight(2),
        width: responsiveWidth(85),
        paddingHorizontal: responsiveWidth(2),
      }
      ,
    checkbox: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        borderWidth: 2,
        borderColor: "#2A4793",
        borderRadius: responsiveWidth(1),
        justifyContent: "center",
        alignItems: "center",
        marginRight: responsiveWidth(3),
    },
    checkedBox: {
        backgroundColor: "#2A4793",
    },
    innerDot: {
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        backgroundColor: "white",
        borderRadius: responsiveWidth(1),
    },
    text: {
        fontSize: responsiveFontSize(1.8),
        color: "#4B5563",
        flexShrink: 1,
    },
    link: {
        color: "#2A4793",
        fontWeight: "700",
        fontSize: responsiveFontSize(1.8),
    },
    button: {
        backgroundColor: "#2A4793",
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: responsiveWidth(3),
        alignItems: "center",
        width: Platform.OS === "android"
            ? responsiveWidth(82)
            : responsiveWidth(78),
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: responsiveFontSize(2.2),
    },
    dropdown: { 
        width: responsiveWidth(85),
        borderWidth: 1, 
        borderColor: "#D1D5D8", 
        borderRadius: responsiveWidth(3), 
        backgroundColor: "#FFFFFF", 
        height: responsiveHeight(6.5), 
        paddingHorizontal: responsiveWidth(4), 
        justifyContent: "center"
    }, 
    dropdownContainer: { 
        borderWidth: 1, 
        borderColor: "#D1D5D8", 
        borderRadius: responsiveWidth(3), 
        backgroundColor: "#FFFFFF", 
    },
    dropdownLabel: { 
        fontSize: responsiveFontSize(2), 
        paddingVertical: 0, 
        marginVertical: 0, 
    }, 
    dropdownItem: { 
        height: responsiveHeight(6.5), 
        justifyContent: "center", 
    }, 
    dropdownItemLabel: { 
        fontSize: responsiveFontSize(2), 
    },
      
});