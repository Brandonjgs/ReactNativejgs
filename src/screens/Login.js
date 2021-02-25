import React, { useRef, useState } from 'react';
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
  Alert,
  ActivityIndicator,
} from 'react-native';
import stylesForms from './../styles/styles.forms';
import formStyle from './../styles/styles.forms';
import firebase from './../database/firebase';
import getError from './../helpers/errores_es_mx';

const Login = (props) => {
  /**----- Codigo que genera el movimiento del logo ----- */
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
  /**----- Termina codigo movimiento logo ----*/

  /**----- Validar login ----- */
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [btnVisible, setBtnVisible] = useState(true);
  const [aiVisible, setAiVisible] = useState(false);
  const [tiEnabled, setTiEnabled] = useState(true);

  const validateLogin = async () => {
    if (userName.length < 10) {
      Alert.alert('ERROR', 'Email invalido', [
        {
          text: 'Corregir',
          onPress: () => setUserName(''),
        },
      ]);
      return;
    }

    if (password.length != 12) {
      Alert.alert('ERROR', 'Password incorrecto', [
        {
          text: 'Corregir',
          onPress: () => setPassword(''),
        },
      ]);
      return;
    }

    setBtnVisible(false);
    setAiVisible(true);
    setTiEnabled(false);

    /**----- Comienza codigo para verificacion con firebase */
    try {
      const userFirebase = await firebase.auth.signInWithEmailAndPassword(
        userName,
        password
      );

      console.log(userFirebase);

      Alert.alert('Bienvenido', `Has accedido con ${userFirebase.user.email}`, [
        {
          text: 'Acceder',
          onPress: () => {
            setBtnVisible(true);
            setAiVisible(false);
            setTiEnabled(true);
            props.navigation.navigate('Home');
          },
        },
      ]);
    } catch (e) {
      Alert.alert('ERROR', getError(e.code), [
        {
          text: 'Volver a intentar',
          onPress: () => {
            setBtnVisible(true);
            setAiVisible(false);
            setTiEnabled(true);
          },
        },
      ]);
    }
    /**----- Termina codigo para verificacion con firebase */
    setTimeout(() => {
      setBtnVisible(true);
      setAiVisible(false);
      setTiEnabled(true);
      props.navigation.navigate('Home');
    }, 500);
  };
  /**----- Termina validación de login ----- */

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
        style={formStyle.input}
        placeholder='Email'
        keyboardType='email-address'
        maxLength={50}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(val) => setUserName(val)}
        value={userName}
        editable={tiEnabled}
      />
      <TextInput
        style={formStyle.input}
        placeholder='Password'
        keyboardType='default'
        autoCapitalize='none'
        maxLength={12}
        autoCorrect={false}
        secureTextEntry
        onChangeText={(val) => setPassword(val)}
        value={password}
        editable={tiEnabled}
      />

      <ActivityIndicator
        color='#fff'
        size='large'
        style={{ marginVertical: 15, display: aiVisible ? 'flex' : 'none' }}
      />

      <View style={{ display: btnVisible ? 'flex' : 'none' }}>
        <TouchableOpacity
          style={[formStyle.boton, formStyle.botonR]}
          onPress={validateLogin}
        >
          <Text style={formStyle.botonTexto}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

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
