import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { fetchFactura } from "../../../../MVC/Controllers/FacturaController";

const FacturaScreen = ({ navigation }) => {
  const [factura, setfactura] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFactura(setFactura, setLoading);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={require("...")}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.level}>Fecha: {item.level}</Text>
        <Text style={styles.price}>Factura: {item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3E2C1C" />
      ) : (
        <FlatList
          data={factura}
          keyExtractor={(item, index) => {
            if (item) {
              if (item.IdFactura !== undefined && item.IdFactura !== null) {
                return item.IdFactura.toString();
              } else if (item.id !== undefined && item.id !== null) {
                return item.id.toString();
              }
            }
            return index.toString();
          }}
          renderItem={renderItem}
        />
      )}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("CreateFactura")} 
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#3E2C1C",
    marginBottom: 8,
  },
  description: {
    color: "#777",
    fontSize: 14,
    marginBottom: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  level: {
    fontSize: 14,
    color: "#555",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3E2C1C",
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#3E2C1C",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  floatingButtonText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default CoursesScreen;
