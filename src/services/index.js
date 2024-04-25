import { db } from '@/firebase';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';

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

export const getProducts = async (categoryId = undefined) => {
	try {
		let q;
		if (categoryId) {
			q = query(
				collection(db, 'products'),
				where('product_cat', 'array-contains', categoryId),
			);
		} else {
			q = query(collection(db, 'products'));
		}
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

export const getProductByHandle = async handle => {
	const q = query(collection(db, 'products'), where('handle', '==', handle));
	let product;
	try {
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach(doc => {
			product = doc.data();
		});
		return product;
	} catch (error) {
		console.error(error);
	}
};

export const getCategoryInfo = async (categoryId, currentCatPathname = '') => {
	try {
		const docRef = doc(db, 'product_cats', categoryId.toString());
		const docSnap = await getDoc(docRef);
		const data = docSnap.data();

		const catPathname = currentCatPathname
			? `${data.handle}/${currentCatPathname}`
			: `/${data.handle}`;

		if (data.parent) {
			const parentInfo = await getCategoryInfo(data.parent, catPathname);
			return {
				...data,
				parentHandle: parentInfo.handle,
				catPathname: parentInfo.catPathname,
			};
		} else {
			return { ...data, catPathname };
		}
	} catch (error) {
		console.error(error);
	}
};
