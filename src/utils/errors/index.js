import toast from 'react-hot-toast';

const invalidCredsErrorMsg =
	'Correo o contraseña incorrectos. Por favor, vuelve a intentarlo!';

const ERRORS = {
	'invalid-email': invalidCredsErrorMsg,
	'user-not-found': invalidCredsErrorMsg,
	'wrong-password': invalidCredsErrorMsg,
	'invalid-credential': invalidCredsErrorMsg,
	'user-disabled': 'El usuario ha sido deshabilitado!',
	'storage/unauthorized': 'No tienes autorización para realizar esta acción!',
	defaultError: 'Ocurrió un error. Por favor intentalo más tarde!',
};

export const errorHandler = error => {
	const errorCode = error?.code?.replace(/auth\//, '');
	const errorMessage =
		ERRORS[errorCode] || error?.message || ERRORS.defaultError;

	console.error(error);
	toast.error(errorMessage);
};
