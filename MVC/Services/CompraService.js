const API_URL = "https:";

export const getAllCompra = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener las compras");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getAllCompras:", error);
    throw error;
  }
};
