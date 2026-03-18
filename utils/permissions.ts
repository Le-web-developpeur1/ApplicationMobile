import * as Contacts from "expo-contacts";
import  { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
// import  { Audio } from "expo-av";

export const askCameraPermission = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();
  return status === "granted"
};

export const askLocationPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status;
};

// export const askMicrophonePermission = async () => {
//   const { status } = await Audio.requestPermissionsAsync();
//   return status;
// };

export const askContactsPermission = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  return status;
};

export const askStoragePermission = async () => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  return status;

};
