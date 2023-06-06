import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import namesAsObjects from "./data/names.js";

export default function App() {
  const rowRenderer = ({ item }) => (
    <View style={{ padding: 10, backgroundColor: "lightblue", margin: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={namesAsObjects()}
      keyExtractor={(item) => item.id}
      renderItem={rowRenderer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
