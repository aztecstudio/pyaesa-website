import { getDocs, query } from 'firebase/firestore';

export const fetchData = async ref => {
	const q = query(ref);
	try {
		const querySnapshot = await getDocs(q);
		const array = [];
		querySnapshot.forEach(doc => {
			array.push(doc.data());
		});
		return array;
	} catch (error) {
		console.error(error);
	}
};
