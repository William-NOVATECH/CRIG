import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Pantallas
import LoginScreen from "./MVC/Views/Auth/LoginScreen";
import RegisterScreen from "./MVC/Views/Auth/RegisterScreen";
import HomeScreen from "./MVC/Views/Home/HomeScreen";
import LoadingScreen from "./MVC/Views/Auth/LoadingScreen";

// Pyme: pantallas
import HomePymeScreen from "./MVC/Views/Home/Pyme/HomePymeScreen";
import FacturaScreen from "./MVC/Views/Home/Factura/FacturaScreen";
import CompraScreen from "./MVC/Views/Home/Compra/CompraScreen";
import CreateVentaScreen from "./MVC/Views/Home/Pyme/CreateVentaScreen";
import WelcomeScreen from "./MVC/Views/WelcomeScreen";

// Layout con navbar de la pyme
import PymeLayout from "./Components/PymeLayout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
          >
            {/* Auth y carga */}
             <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />

            {/* Cliente */}
            <Stack.Screen name="HomeCliente" component={HomeScreen} />

            {/* Pyme */}
            <Stack.Screen name="HomePyme">
              {({ navigation, route }) => (
                <PymeLayout navigation={navigation} route={route}>
                  <HomePymeScreen navigation={navigation} route={route} />
                </PymeLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="Factura">
              {({ navigation, route }) => (
                <FacturaLayout navigation={navigation} route={route}>
                  <FacturaScreen navigation={navigation} route={route} />
                </FacturaLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="CreateCompra">
              {({ navigation, route }) => (
                <CompraLayout navigation={navigation} route={route}>
                  <CreateCompraScreen navigation={navigation} route={route} />
                </CompraLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="Venta">
              {({ navigation, route }) => (
                <VentaLayout navigation={navigation} route={route}>
                  <VentaScreen navigation={navigation} route={route} />
                </VentaLayout>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}