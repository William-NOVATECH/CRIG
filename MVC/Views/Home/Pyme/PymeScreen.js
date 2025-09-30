import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PymeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario de la Pyme</Text>
      <Text>Aquí aparecera el inventario de la Pyme.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3E2C1C",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },
});

export default ClassroomsScreen;
