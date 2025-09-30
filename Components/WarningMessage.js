import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Usaremos FontAwesome para los iconos

const WarningMessage = ({ message, type }) => {
  let bgColor, iconColor;

  // Definimos colores según el tipo de mensaje
  if (type === "error") {
    bgColor = "#F44336"; // Rojo para errores
    iconColor = "#fff";
  } else if (type === "warning") {
    bgColor = "#FF9800"; // Naranja para advertencias
    iconColor = "#fff";
  } else {
    bgColor = "#8BC34A"; // Verde para éxitos
    iconColor = "#fff";
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <FontAwesome
        name="exclamation-circle"
        size={20}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  message: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WarningMessage;
