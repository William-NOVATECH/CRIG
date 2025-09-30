import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    Alert.alert("Cerrar Sesión", "¿Estás seguro de que deseas cerrar sesión?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Cerrar Sesión",
        onPress: async () => {
          try {
            await AsyncStorage.clear();
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          } catch (error) {
            console.error("Error al cerrar sesión:", error);
          }
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.leftGroup}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeTeacher")}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Compra")}>
          <Text style={styles.navItem}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Factura")}>
          <Text style={styles.navItem}>Factura</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3E2C1C",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  leftGroup: {
    flexDirection: "row",
    gap: 20,
  },
  navItem: {
    color: "#fff",
    fontSize: 16,
    marginRight: 16,
  },
  logout: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Navbar;
