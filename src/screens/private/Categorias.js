import { useFocusEffect } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import MisDatos from './profile/MisDatos';
import { FontAwesome5 } from '@expo/vector-icons';
/**Para crear un tab navigator necesitamos un contenedor
 * para indicar dentro cada item del menu
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Categorias = (props) => {
  return (
    <Tab.Navigator
      initialRouteName='MisDatos'
      tabBarOptions={{
        activeBackgroundColor: '#525252',
        style: { backgroundColor: '#fff' },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name='MisDatos'
        component={MisDatos}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name='user-edit' size={30} color='#fff' />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Categorias;
