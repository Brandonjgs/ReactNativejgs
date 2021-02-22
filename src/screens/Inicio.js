import React from 'react';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import formStyle from '../styles/styles.forms';

const Inicio = (props) => {
  return (
    <View>
      <Image
        source={require('./../../assets/images/Inicio-mono.png')}
        style={formStyle.inicioImg}
      />
      <Text style={formStyle.loginTitle}>Aplicación en construcción</Text>
      <TouchableOpacity
        style={[formStyle.boton, formStyle.botonR, formStyle.botonInicio]}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      >
        <Text style={formStyle.botonTexto}>Pulsa aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inicio;
