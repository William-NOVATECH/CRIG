import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkUserRole = async () => {
      const role = await AsyncStorage.removeItem("userRole");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });

      if (role === "Pyme") {
        navigation.reset({
          index: 0,
          routes: [{ name: "HomePyme" }],
        });
      } else if (role === "Cliente") {
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeCliente" }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    };

    checkUserRole();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
