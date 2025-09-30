import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import InputAuth from "../../../Components/InputAuth";
import ButtonAuth from "../../../Components/ButtonAuth";
import AuthService from "../../Services/AuthService";
import WarningMessage from "../../../Components/WarningMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleName: "Cliente",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = async () => {
    if (
      !userData.fullName ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      setErrorMsg("Por favor, completa todos los campos.");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setErrorMsg("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await AuthService.register(userData);
      if (response.success) {
        await AsyncStorage.setItem("role", userData.roleName);
        navigation.navigate("Login");
      } else {
        setErrorMsg(response.message || "Registro fallido");
      }
    } catch (error) {
      setErrorMsg(error.message || "Error al registrarse");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crea una cuenta</Text>

      <InputAuth
        label="Nombre Completo"
        value={userData.fullName}
        onChangeText={(text) => setUserData({ ...userData, fullName: text })}
        iconName="user"
        placeholder="Ingrese Nombre"
      />

      <Text style={styles.label}>Selecciona tu rol:</Text>
      <TouchableOpacity
        style={styles.pickerTouchable}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerText}>{userData.roleName}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Selecciona tu rol</Text>

            <Picker
              selectedValue={userData.roleName}
              onValueChange={(itemValue) => {
                setUserData({ ...userData, roleName: itemValue });
                setModalVisible(false);
              }}
              style={styles.picker}
            >
              <Picker.Item label="Cliente" value="Cliente" />
              <Picker.Item label="Pyme" value="Pyme" />
            </Picker>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <InputAuth
        label="Email"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        iconName="envelope"
        placeholder="Ingrese email"
      />
      <InputAuth
        label="Contraseña"
        value={userData.password}
        onChangeText={(text) => setUserData({ ...userData, password: text })}
        secureTextEntry={!showPassword}
        iconName="lock"
        placeholder="Ingrese contraseña"
      />
      <InputAuth
        label="Confirmar Contraseña"
        value={userData.confirmPassword}
        onChangeText={(text) =>
          setUserData({ ...userData, confirmPassword: text })
        }
        secureTextEntry={!showPassword}
        iconName="lock"
        placeholder="Confirme contraseña"
      />

      <ButtonAuth title="Registrarse" onPress={handleRegister} />

      {errorMsg ? <WarningMessage message={errorMsg} type="error" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 55, justifyContent: "center", flex: 1 },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  label: { fontSize: 16, marginBottom: 10 },
  pickerTouchable: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerText: {
    fontSize: 16,
    color: "#333",
  },
  picker: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  error: { color: "red", marginTop: 10 },
});

export default RegisterScreen;
