import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fetchCompra(setCompra, setLoading) {
  setLoading(true);
  try {
    const token = await AsyncStorage.getItem("userToken");
    if (!token) throw new Error("No se encontró token de usuario");

    const response = await fetch(
      "https:",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "Error al obtener las pymes");
    }

    const data = await response.json();
    setCourses(data);
  } catch (error) {
    console.error("Error en fetchPymes:", error);
  } finally {
    setLoading(false);
  }
}

export const createCompra = async (compraData) => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    if (!token) {
      throw new Error("No se encontró token de usuario");
    }

    const response = await fetch(
      "https:",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(compraData),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Error al crear la Compra:", text);
      throw new Error(text || "Error al crear la Compra.");
    }

    const result = await response.json();
    return result; 
  } catch (error) {
    console.error("Error en la creación de la Compra:", error);
    throw error; 
  }
};
