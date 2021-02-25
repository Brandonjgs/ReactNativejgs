//Importamos todos los servicios de firebase
/**
 * 1. Firestore
 * 2. auth
 * 3. Storage
 * 4. Hosting
 */
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCJuZx0CaMnGISSdVRAZptZSt5wI6Vvz0',
  authDomain: 'dmm-193-abaea.firebaseapp.com',
  projectId: 'dmm-193-abaea',
  storageBucket: 'dmm-193-abaea.appspot.com',
  messagingSenderId: '415715757397',
  appId: '1:415715757397:web:a8583952c00741a25033dc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**Retornar los servicios de firebase y renombramos para no tener que
 * llamar a cada rato todo y solo llamar db y auth
 */
const db = firebase.firestore();
const auth = firebase.auth();

/**Generamos una libreria reutilizable */
export default {
  db,
  auth,
};
