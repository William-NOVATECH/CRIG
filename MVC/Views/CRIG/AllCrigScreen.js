import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { handleGetAllCrig } from '../../Controllers/CrigController';

const AllCrigScreen = ({ navigation }) => {
  const [crig, setCrig] = useState([]);

  useEffect(() => {
    const fetchCrig = async () => {
      try {
        const data = await handleGetAllCrig();
        console.log("Datos recibidos desde la API:", data);;
        setCrig(data);
      } catch (error) {
        Alert.alert('Error', 'No se pudo obtener el inventario');
      }
    };

    fetchCrig();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Inventario Disponible</Text>
      <FlatList
        data={crig}
         keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.name}</Text>
            <Button title="Ver Detalles" onPress={() => navigation.navigate('CrigDetail', { id: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

export default AllCrigScreen;
