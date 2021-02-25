export default function getError(tipo) {
  switch (tipo) {
    case 'auth/user-not-found':
      return 'Usuario incorrecto';
    case 'auth/wrong-password':
      return 'Constraseña incorrecta';
    case 'auth/user-disabled':
      return 'Tu cuenta ha sido deshabilitada, contacta al soporte tecnico';
    case 'auth/email-already-in-use':
      return 'Este correo electronico no esta disponible, intenta otro';
  }
}
