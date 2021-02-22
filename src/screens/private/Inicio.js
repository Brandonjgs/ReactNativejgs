import { useFocusEffect } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';

const Inicio = (props) => {
  useFocusEffect(() => {
    props.navigation.dangerouslyGetParent().setOptions({
      title: 'Inicio',
    });
  });

  return (
    <View>
      <Text>En el inicio de home</Text>
    </View>
  );
};

export default Inicio;
