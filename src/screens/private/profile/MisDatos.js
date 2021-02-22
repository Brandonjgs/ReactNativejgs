import { useFocusEffect } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';

const MisDatos = (props) => {
  useFocusEffect(() => {
    props.navigation.dangerouslyGetParent().dangerouslyGetParent().setOptions({
      title: 'MisDatos',
    });
  });

  return (
    <View>
      <Text>En los datos</Text>
    </View>
  );
};

export default MisDatos;
