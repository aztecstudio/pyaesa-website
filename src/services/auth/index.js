import { auth } from '@/config/firebase';
import { errorHandler } from '@/utils/errors';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';

export const signIn = async ({ email, password }) => {
	const authUser = await signInWithEmailAndPassword(auth, email, password);
	return authUser;
};

export const logout = async () => {
	try {
		await signOut(auth);
		Cookies.remove('authToken');
	} catch (error) {
		console.error(error);
		errorHandler(error);
	}
};
