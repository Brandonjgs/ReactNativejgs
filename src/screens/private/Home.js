import React, { useEffect, useLayoutEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Alert, BackHandler, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/core';
import Sidebar from '../../components/Sidebar';
import Practica3 from './Practica3';
import Inicio from './Inicio';
import Categorias from './Categorias';
/**
 * Agregamos una constante para crear nuestra pila de Screen de
 * Drawer
 */
const Drawer = createDrawerNavigator();

const Home = (props) => {
  //Alerta que confirme la acción back
  const backAction = () => {
    Alert.alert(
      '¡Espera!',
      '¿Realmente deseas salir?',
      [
        {
          text: 'Cancelar',
          onPress: null,
          style: 'cancel',
        },
        {
          text: 'Si, salir',
          onPress: () => {
            //Eliminar el Stack de
            //navegación
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });

            //Navegar a login
            props.navigation.navigate('Login');
          },
          style: 'default',
        },
      ],
      { cancelable: false }
    );
    return true;
  }; // /backaction

  /**
   * Ciclo de vida de un Componente
   * onLoad ============ antes de renderizar la UI
   * render ============ se renderiza la UI (onCreate)
   * componentUpdate === se actualiza la UI después del render
   * componenteDestroy = antes finalizar y destruir el componente
   *
   * Un efecto es una función que permite realizar un cambio
   * en la UI en cualquiera de los momento anteriormente indicados
   *
   * useEffect ============ Cuando agregar elementos al VDOM
   * sin afectar algún componente de la UI actual
   *
   * useLayoutEffect ====== Cuando necesitas un cambio
   * en la ui actual, modificar algun elemento existente del VDOM
   */
  useLayoutEffect(() => {
    //Modificamos el header
    //del Stack
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            paddingLeft: 10,
            paddingRight: 30,
            paddingVertical: 10,
          }}
          onPress={() => {
            props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <Entypo name='menu' size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            paddingRight: 10,
            paddingLeft: 30,
            paddingVertical: 10,
          }}
          onPress={backAction}
        >
          <AntDesign name='logout' size={21} />
        </TouchableOpacity>
      ),
    });
  }, []);

  //Efecto sin anclar (solo se ejecuta al inicio)
  //Que permita modificar el comportamiento del boton back
  //del Hardware
  useEffect(() => {
    //Vincular la alerta al evento back
    const backHandler = BackHandler.addEventListener(
      //Evento back desde el boton del SO
      'hardwareBackPress',
      backAction
    );

    //Al final, eliminamos el listener del backButton
    return () => backHandler.remove();
  }, []);

  return (
    /** Creamos la estructura de nuestro navigation Drawer */
    <Drawer.Navigator
      initialRouteName='InicioUser'
      drawerType='front'
      openByDefault={false}
      drawerContent={() => <Sidebar {...props} />}
      drawerStyle={{
        backgroundColor: '#fff',
        width: 290,
      }}
    >
      {/** Agregamos cada item del Drawer */}
      <Drawer.Screen name='InicioUser' component={Inicio} />
      <Drawer.Screen name='Categorias' component={Categorias} />
      <Drawer.Screen name='Practica3' component={Practica3} />
    </Drawer.Navigator>
  );
};

export default Home;
