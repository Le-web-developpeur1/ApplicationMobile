import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CameraView, BarcodeScanningResult } from "expo-camera";
import { askCameraPermission } from "@/utils/permissions"; 
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export default function QrScanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await askCameraPermission();
      setHasPermission(status);
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarcodeScanningResult) => {
    setScanned(true);
    alert(`QR Code détecté: ${data}`);
  };

  if (hasPermission === null) return <Text>Demande de permission...</Text>;
  if (hasPermission === false) return <Text>Accès caméra refusé</Text>;

  return (
    <View style={styles.container}>
        <CameraView
            style={styles.camera}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        <Text style={styles.text}>Placez le QR code dans le carré</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5f"
    },
    camera: {
        width: scale(250),
        height: verticalScale(250),
        borderRadius: moderateScale(12),
        overflow: "hidden"

    },
    text: {
        textAlign: "center",
        marginTop: verticalScale(10),
    },

})
