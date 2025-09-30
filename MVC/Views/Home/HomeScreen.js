import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ route, navigation }) => {
  const { role } = route.params || {};

  const isPyme = role === "pyme";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido {isProfesor ? "pyme" : "cliente"}
      </Text>

      {isProfesor ? (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Panel de la pyme</Text>
          <Button
            title="Crear Pyme"
            onPress={() => navigation.navigate("CreatePyme")}
          />
        </View>
      ) : (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Tus inventario disponible</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: { fontSize: 20, marginBottom: 10 },
  section: { marginTop: 20 },
});

export default HomeScreen;
