/**INSTALACIONES REQUERIDAS
 * npm install @react-navigation/stack
 * npm install @react-navigation/native
 * npm install @react-navigation/drawer
 * npm i @react-navigation/core
 * npm install @react-navigation/bottom-tabs
 * npm install firebase
 *
 * COLORES
 * ##55d0f4
 *
 * TAMAÑOS DE IMAGEN
 * Icono - 192x192
 * Splash - 1242x2436
 * Inicio - 1242x2436
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './src/screens/Inicio';
import Login from './src/screens/Login';
import Signin from './src/screens/Signin';
import Home from './src/screens/private/Home';

/**
 * Para utilizar la navegación de React necesitamos
 * 1.- NavigationContainer (preferentemente uno para toda la App)
 * 2.- Contenedor de forma de navegación (Stack, Tab, Drawer) ejem = Stack
 * 3.- Indicar las screens relacionadas a ese contenedor de navegacion
 */

/**2. Creamos el contenido de la navegacion */
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Inicio'
        screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#55d0f4' },
        }}
      >
        {/**3. Paso numer tress */}
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignIn' component={Signin} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
