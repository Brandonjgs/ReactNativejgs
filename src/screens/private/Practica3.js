import { useFocusEffect } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import Tareas from '../../components/Tareas';

const Practica3 = (props) => {
  //Estado para controlar la visibilidad del loader para mi FlatList
  const [rcTasks, setRcTasks] = useState(true);

  //Estado para guardar el arreglo de tareas
  const [tasks, setTasks] = useState([]);

  //Cambiar el titulo de cada seccion
  useFocusEffect(() => {
    props.navigation.dangerouslyGetParent().setOptions({
      title: 'Practica 3',
    });
  });

  const getTareasAsync = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const json = await response.json();

      /**
       * Recorrer el arreglo de datos, map es como un foreach
       */
      const arrTareas = [];

      json.map((tarea) => {
        //Guardar el objeto de usuario dentro del array haciendole push con lo que recorra de tarea
        arrTareas.push(tarea);
      });

      //Indicamos que el valor del estado
      //será el del arreglo
      setTasks(arrTareas);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Creamos un efecto que no esté enganchado a ningun estado (solo se ejecuta al inicio)
   * Para invocar a la lista de usuarios
   */
  useEffect(() => {
    //Cargamos la lista por medio de una promesa
    //getUsuariosPromise();
    //Cargamos la lista por medio de un func async
    setTimeout(() => {
      getTareasAsync();
      setRcTasks(false);
    }, 500);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#55d0f4' }}>
      <FlatList
        style={{ margin: 15 }}
        refreshControl={<RefreshControl refreshing={rcTasks} />}
        data={tasks}
        renderItem={(item) => <Tareas datosTarea={item.item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Practica3;
