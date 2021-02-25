import React, { useState } from 'react';
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
  Alert,
  ActivityIndicator,
  Switch,
} from 'react-native';
import formStyle from './../styles/styles.forms';
import firebase from './../database/firebase';
import getError from './../helpers/errores_es_mx';

const Signin = (props) => {
  const fadeAnim = new Animated.Value(0);

  /**----- Codigo para animacion del logo ----- */
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
  /**----- Termina codigo animacion logo -----*/

  /**----- Validacion signin ----- */
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [fecNac, setFecNac] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terminos, setTerminos] = useState(false);
  const [aiVisible, setAiVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);
  const [tiEnabled, setTiEnabled] = useState(true);
  const toggleSwitch = () => setTerminos((previousState) => !previousState);

  const validateSignin = async () => {
    if (nombre.length < 3) {
      Alert.alert('ERROR', 'Nombre invalido', [
        {
          text: 'Corregir',
          onPress: () => setNombre(''),
        },
      ]);
      return;
    }

    if (apellido1.length < 3) {
      Alert.alert('ERROR', 'Primer apellido invalido', [
        {
          text: 'Corregir',
          onPress: () => setApellido1(''),
        },
      ]);
      return;
    }

    if (apellido2.length < 3) {
      Alert.alert('ERROR', 'Segundo apellido invalido', [
        {
          text: 'Corregir',
          onPress: () => setApellido2(''),
        },
      ]);
      return;
    }

    if (fecNac.length < 10 || fecNac.length >= 11) {
      Alert.alert('ERROR', 'El formato de fecha debe ser DD/MM/YYYY', [
        {
          text: 'Corregir',
          onPress: () => setFecNac(''),
        },
      ]);
      return;
    }

    if (tel.length < 10 || tel.length >= 11) {
      Alert.alert('ERROR', 'Telefono invalido', [
        {
          text: 'Corregir',
          onPress: () => setTel(''),
        },
      ]);
      return;
    }

    if (email.length < 10) {
      Alert.alert('ERROR', 'Email invalido', [
        {
          text: 'Corregir',
          onPress: () => setEmail(''),
        },
      ]);
      return;
    }

    if (password.length != 12) {
      Alert.alert('ERROR', 'Password invalido, debe ser de 12 caracteres', [
        {
          text: 'Corregir',
          onPress: () => setPassword(''),
        },
      ]);
      return;
    }

    if (terminos == false) {
      Alert.alert('ERROR', 'Acepta los terminos y condiciones', [
        {
          text: 'Corregir',
          onPress: () => setTerminos(false),
        },
      ]);
      return;
    }

    setBtnVisible(false);
    setAiVisible(true);
    setTiEnabled(false);

    /**----- Comienza codigo de insersion en firestore ----- */
    try {
      /**Creamos variable con email y pass para insertar en auth de firebase */
      const usuarioFirebase = await firebase.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      /**Creamos documento del usuario con id del auth */
      const docUsuario = await firebase.db.collection('usuarios').add({
        authId: usuarioFirebase.user.uid,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        fechaNac: fecNac,
        telefono: tel,
        email: email,
      });

      /**Enviamos correo de verificacion al usuario */
      await usuarioFirebase.user.sendEmailVerification().then(() => {
        setBtnVisible(true);
        setAiVisible(false);
        setTiEnabled(true);
        Alert.alert(
          'EXITO',
          '¡Registro completado! Revisa tu correo y verifica tu cuenta',
          [
            {
              text: 'Iniciar sesion',
              onPress: () => {
                props.navigation.navigate('Login');
              },
            },
          ]
        );
      });
    } catch (e) {
      console.log(e.code);
      Alert.alert(
        'ERROR',
        getError(e.code),
        [
          {
            text: 'Aceptar',
            onPress: () => {
              setAiVisible(false);
              setBtnVisible(true);
            },
          },
        ],
        { cancelable: false }
      );
    }
    /**----- Termina codigo de insersion en firestore ----- */
  };

  /**----- Termina validacion de signin */

  /**Creamos una funcion flecha anonima que permita crear un documento
   * usuario en la coleccion usuarios
   */

  const crearUsuarioFS = async () => {
    try {
      /**Usamos el metodo asincrono collection.add */
      const usuario = {
        nombre: 'Brandon',
        apellido: 'Guevara',
      };
      const usuarioFS = await firebase.db.collection('usuarios').add(usuario);
      console.log('Usuario insertado');
    } catch (e) {
      console.warn(e);
    }
  };

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

      <TextInput
        style={formStyle.input}
        placeholder='Nombre'
        keyboardType='default'
        maxLength={50}
        onChangeText={(val) => setNombre(val)}
        value={nombre}
        editable={tiEnabled}
      />
      <View style={formStyle.row}>
        <View style={[formStyle.col, formStyle.derecha]}>
          <TextInput
            placeholder='Primer apellido'
            keyboardType='default'
            style={formStyle.input}
            maxLength={50}
            onChangeText={(val) => setApellido1(val)}
            value={apellido1}
            editable={tiEnabled}
          />
        </View>
        <View style={[formStyle.col, formStyle.izquierda]}>
          <TextInput
            placeholder='Segundo apellido'
            keyboardType='default'
            style={formStyle.input}
            maxLength={50}
            onChangeText={(val) => setApellido2(val)}
            value={apellido2}
            editable={tiEnabled}
          />
        </View>
      </View>
      <View style={formStyle.row}>
        <View style={[formStyle.col, formStyle.derecha]}>
          <TextInput
            placeholder='Fecha nacimiento'
            keyboardType='default'
            style={formStyle.input}
            maxLength={10}
            onChangeText={(val) => setFecNac(val)}
            value={fecNac}
            editable={tiEnabled}
          />
        </View>
        <View style={[formStyle.col, formStyle.izquierda]}>
          <TextInput
            placeholder='Telefono'
            keyboardType='default'
            style={formStyle.input}
            maxLength={10}
            onChangeText={(val) => setTel(val)}
            value={tel}
            editable={tiEnabled}
          />
        </View>
      </View>
      <TextInput
        placeholder='Correo electronico'
        keyboardType='email-address'
        style={formStyle.input}
        maxLength={50}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(val) => setEmail(val)}
        value={email}
        editable={tiEnabled}
      />
      <TextInput
        placeholder='Password (12 caracteres)'
        keyboardAppearance='dark'
        keyboardType='default'
        style={formStyle.input}
        autoCapitalize='none'
        maxLength={12}
        autoCorrect={false}
        secureTextEntry
        onChangeText={(val) => setPassword(val)}
        value={password}
        editable={tiEnabled}
      />

      <View style={formStyle.row}>
        <View style={{ flex: 1 }}>
          <Switch
            trackColor={{ false: '#767577', true: '#fff' }}
            thumbColor={terminos ? '#55d0f4' : '#fff'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={terminos}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ color: '#fff', marginVertical: 5 }}>
            Aceptar terminos y condiciones
          </Text>
        </View>
      </View>

      <ActivityIndicator
        color='#fff'
        size='large'
        style={{ marginVertical: 15, display: aiVisible ? 'flex' : 'none' }}
      />

      <View style={{ display: btnVisible ? 'flex' : 'none' }}>
        <TouchableOpacity
          style={[formStyle.boton, formStyle.botonR]}
          onPress={validateSignin}
        >
          <Text style={formStyle.botonTexto}>Registrarme</Text>
        </TouchableOpacity>
      </View>

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

      <Button title='Insertar en firestore' onPress={crearUsuarioFS} />
    </ScrollView>
  );
};

export default Signin;
