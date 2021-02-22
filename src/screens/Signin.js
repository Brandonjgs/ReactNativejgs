import React from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  Animated,
  StyleSheet,
  Easing,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import formStyle from './../styles/styles.forms';

const fadeAnim = new Animated.Value(0);

Animated.loop(
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 30000,
    easing: Easing.linear,
    useNativeDriver: true,
  })
).start();

const spin = fadeAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const Signin = (props) => {
  return (
    <ScrollView style={formStyle.contenedor}>
      <Animated.Image
        source={require('./../../assets/images/icono-react-white.png')}
        style={[
          formStyle.imgSignin,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />
      <Text style={formStyle.loginTitle}>Crea una cuenta</Text>

      <TextInput placeholder='Nombre' style={formStyle.input} />
      <View style={formStyle.row}>
        <View style={[formStyle.col, formStyle.derecha]}>
          <TextInput
            placeholder='Primer apellido'
            keyboardType='default'
            style={formStyle.input}
          />
        </View>
        <View style={[formStyle.col, formStyle.izquierda]}>
          <TextInput
            placeholder='Segundo apellido'
            keyboardType='default'
            style={formStyle.input}
          />
        </View>
      </View>
      <TextInput
        placeholder='Correo electronico'
        keyboardType='email-address'
        style={formStyle.input}
      />
      <TextInput
        placeholder='Contraseña'
        keyboardAppearance='dark'
        keyboardType='default'
        secureTextEntry
        style={formStyle.input}
      />

      <TouchableOpacity style={[formStyle.boton, formStyle.botonR]}>
        <Text style={formStyle.botonTexto}>Registrarme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={formStyle.boton}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      >
        <Text style={[formStyle.botonTexto, formStyle.textWhite]}>
          ¿Ya tienes cuenta? Inicia sesion
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Signin;
