import React, { useRef } from 'react';
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
} from 'react-native';
import stylesForms from './../styles/styles.forms';
import formStyle from './../styles/styles.forms';

const Login = (props) => {
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

  return (
    <View style={[formStyle.contenedor]}>
      <Animated.Image
        source={require('./../../assets/images/icono-react-white.png')}
        style={[
          formStyle.imgSignin,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />
      <Text style={formStyle.loginTitle}>Brandonjgs</Text>
      <TextInput
        placeholder='Correo electronico'
        keyboardType='email-address'
        style={formStyle.input}
      />
      <TextInput
        placeholder='Contraseña'
        keyboardType='default'
        secureTextEntry
        style={formStyle.input}
      />

      <TouchableOpacity
        style={[formStyle.boton, formStyle.botonR]}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        <Text style={formStyle.botonTexto}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={formStyle.boton}
        onPress={() => {
          props.navigation.navigate('SignIn');
        }}
      >
        <Text style={[formStyle.botonTexto, formStyle.textWhite]}>
          ¿No tienes cuenta? Registrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
