import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

  if (hasPermission === null) return <Text style={styles.info}>Demande de permission...</Text>;
  if (hasPermission === false) return <Text style={styles.info}>Accès caméra refusé</Text>;

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Placez le QR code dans le carré</Text>
        </View>
      </CameraView>

      {scanned && (
        <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.buttonText}>Scanner à nouveau</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // corrigé
  },
  camera: {
    width: scale(280),
    height: verticalScale(280),
    borderRadius: moderateScale(12),
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: verticalScale(8),
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  info: {
    textAlign: "center",
    marginTop: verticalScale(20),
    fontSize: moderateScale(16),
    color: "#333",
  },
  button: {
    marginTop: verticalScale(20),
    backgroundColor: "#2A4793",
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(8),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: moderateScale(16),
  },
});
