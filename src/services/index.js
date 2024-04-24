import { db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

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

export const getCategories = async () => {
	const q = query(collection(db, 'product_cats'));
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

export const getProducts = async categoryId => {
	const q = query(
		collection(db, 'products'),
		where('product_cat', 'array-contains', categoryId),
	);
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
