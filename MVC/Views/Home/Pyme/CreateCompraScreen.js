import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { createCompra } from "../../../../MVC/Controllers/CompraController";

const CreateCompraScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateCompra = async () => {
    if (!title || !description || !price) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);

    try {
      const compraData = { title, description, price };
      const response = await createCompra(courseData);

      if (response && response.success) {
        Alert.alert("Éxito", "Compra creado correctamente.");
        navigation.goBack();
      } else {
        Alert.alert("Error", "No se pudo crear la Compra. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al crear compra:", error);
      Alert.alert("Error", "Hubo un problema al crear la compra.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigation.navigate("Compra");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Compra</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateCourse}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Cargando..." : "Crear Compra"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F1F1F1",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3E2C1C",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#3E2C1C",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#FF4D4D",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  cancelButtonText: {
    color: "#FFF",
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default CreateCompraScreen;
