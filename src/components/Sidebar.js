import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import formStyle from './../styles/styles.forms';
const Sidebar = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./../../assets/images/imageBack.jpg')}
        style={{ paddingBottom: 30 }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <ImageBackground
              source={require('./../../assets/images/avatar.png')}
              style={{
                width: 60,
                height: 60,
                overflow: 'hidden',
                marginTop: 20,
                borderRadius: 30,
                backgroundColor: '#000',
              }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 1, marginLeft: 10, marginTop: 30 }}>
              <Text style={[formStyle.sideNombre]}>Brandon Guevara Silva</Text>
              <Text style={formStyle.sideCorreo}>brandon@gmail.com</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={() => <AntDesign name='exception1' size={20} color='black' />}
          label='Practica 3'
          onPress={() => {
            props.navigation.navigate('Practica3');
          }}
        />
        <DrawerItem
          icon={() => <AntDesign name='home' size={20} color='#000' />}
          label='Inicio'
          onPress={() => {
            props.navigation.navigate('InicioUser');
          }}
        />
        <DrawerItem
          label='Categorias'
          onPress={() => {
            props.navigation.navigate('Categorias');
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default Sidebar;
