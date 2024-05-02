import { useEffect, useState } from 'react';
import { auth } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';

export const useAuth = () => {
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, async currentUser => {
			try {
				if (currentUser) {
					setAuthUser(currentUser);
					const fbToken = await currentUser.getIdToken();
					Cookies.set('authToken', fbToken);
				}
			} catch (error) {
				console.error(error.message);
			}
		});
	}, []);

	return authUser;
};
