import { useEffect, useState } from 'react';
import { auth } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';

export const useAuth = () => {
	const [token, setToken] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, async currentUser => {
			try {
				if (currentUser) {
					const fbToken = await currentUser.getIdToken();
					setToken(fbToken);
					Cookies.set('authToken', fbToken);
				}
			} catch (error) {
				console.error(error.message);
			}
		});
	}, []);

	return { token, setToken };
};
