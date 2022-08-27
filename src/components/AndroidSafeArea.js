import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  flex: 1,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
});