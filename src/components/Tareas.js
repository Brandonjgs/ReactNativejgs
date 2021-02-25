import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from 'react-native';

import { FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';

const Tareas = ({ datosTarea }) => {
  /**
   * Object Destructuring
   * JS permite crear variables/constantes a partir de las claves
   * de un objeto
   * {NOM_VAR / NOM_CONST} = obj
   */

  const { userId, id, title, completed } = datosTarea;

  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
          borderRadius: 10,
          marginBottom: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <AntDesign name='caretright' size={24} color='black' />
          </View>
          <View
            style={{ flex: 8, alignSelf: 'center', justifyContent: 'center' }}
          >
            <Text style={{ justifyContent: 'center' }}>{title}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <AntDesign
              name={completed ? 'checkcircle' : 'closecircle'}
              size={24}
              color={completed ? 'green' : 'red'}
            />
            {/**<AntDesign name="checkcircle" size={24} color="green" /> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tareas;
