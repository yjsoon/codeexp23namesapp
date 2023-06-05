import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem"
];

export default function App() {
  function displayNames() {
    let nameJSX = [];
    let name;
    for (let i = 0; i < names.length; i++) {
      nameJSX.push(<Text key={i}>{names[i]}</Text>);
    }
    return nameJSX;
  }

  return <View style={styles.container}>{displayNames()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
