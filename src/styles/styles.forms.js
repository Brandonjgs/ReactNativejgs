import react from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imgInicio: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 350,
  },
  imgSignin: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 10,
  },
  contenedor: {
    flex: 1,
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 9,
    fontSize: 16,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  derecha: {
    marginRight: 5,
  },
  izquierda: {
    marginLeft: 5,
  },
  loginTitle: {
    color: '#fff',
    fontSize: 32,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 35,
  },
  boton: {
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#fff',
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
  botonR: {
    backgroundColor: '#fff',
  },
  botonTexto: {
    fontSize: 17,
    margin: 10,
    alignSelf: 'center',
    fontWeight: '700',
    color: '#4a4e4d',
  },
  textWhite: {
    color: '#FFF',
  },
  inicioImg: {
    alignSelf: 'center',
    width: 400,
    height: 400,
  },
  botonInicio: {
    marginRight: 90,
    marginLeft: 90,
  },
  sideTitulo: {
    color: '#FFF',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 22,
  },
  sideNombre: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 5,
    textShadowColor: '#fff',
    textShadowRadius: 6,
    textShadowOffset: {
      height: 1,
      width: 1,
    },
  },
  sideCorreo: {
    color: '#fff',
    fontWeight: '500',
    textShadowColor: '#fff',
    textShadowRadius: 6,
    textShadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
