import { auth } from '@/config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

export const signIn = async ({ email, password }) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error(error);
		toast.error('Ocurrió un error. Intentelo más tarde!');
	}
};

export const logout = async () => {
	try {
		await signOut(auth);
		Cookies.remove('authToken');
	} catch (error) {
		console.error(error);
	}
};
