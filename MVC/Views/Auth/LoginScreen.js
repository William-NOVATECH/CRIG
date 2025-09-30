import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputAuth from "../../../Components/InputAuth";
import ButtonAuth from "../../../Components/ButtonAuth";
import AuthService from "../../../MVC/Services/AuthService";
import WarningMessage from "../../../Components/WarningMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(email, password);

      if (response && response.token && response.roleName) {
        await AsyncStorage.setItem("userToken", response.token);
        await AsyncStorage.setItem("userRole", response.roleName);

        if (response.roleName === "Pyme") {
          navigation.reset({
            index: 0,
            routes: [{ name: "HomePyme" }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "HomeCliente" }],
          });
        }
      } else {
        setErrorMsg("No se pudo iniciar sesión. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMsg("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicia sesión</Text>

      <InputAuth
        label="Email"
        value={email}
        onChangeText={setEmail}
        iconName="envelope"
        placeholder="Ingresa tu email"
      />
      <InputAuth
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        iconName="lock"
        placeholder="Ingresa tu contraseña"
      />

      <ButtonAuth title="Iniciar Sesión" onPress={handleLogin} />

      {errorMsg ? <WarningMessage message={errorMsg} type="error" /> : null}

      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        ¿No tienes cuenta? Regístrate
      </Text>
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
  error: { color: "red", marginTop: 10 },
  link: { color: "blue", marginTop: 20, textAlign: "center", fontSize: 22 },
});

export default LoginScreen;
