import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputAuth = ({ label, value, onChangeText, secureTextEntry, iconName, placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        {iconName && <FontAwesome name={iconName} size={20} color="#888" style={styles.icon} />}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { marginVertical: 10 },
  label: { fontSize: 16, color: "#333", marginBottom: 5 },
  inputWrapper: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10 },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
  },
  icon: { marginRight: 10 },
});

export default InputAuth;
