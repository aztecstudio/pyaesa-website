import { db } from '@/config/firebase';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	setDoc,
	where,
} from 'firebase/firestore';

const categoriesCollectionRef = collection(db, 'product_cats');
const productsCollectionRef = collection(db, 'products');
const promoImagesCollectionRef = collection(db, 'promos_images');

export const getAllCategories = async () => {
	try {
		const q = query(categoriesCollectionRef);

		const querySnapshot = await getDocs(q);
		const categories = [];
		querySnapshot.forEach(doc => {
			categories.push(doc.data());
		});

		return categories;
	} catch (error) {
		console.error(error);
	}
};

export const getMainCategories = async () => {
	try {
		const q = query(categoriesCollectionRef, where('parent', '==', 0)); // Main categories parent = 0

		const querySnapshot = await getDocs(q);
		const mainCategories = [];
		querySnapshot.forEach(doc => {
			mainCategories.push(doc.data());
		});

		return mainCategories;
	} catch (error) {
		console.error(error);
	}
};

export const getCategoryInfo = async (categoryId, currentCatPathname = '') => {
	try {
		const docRef = doc(db, 'product_cats', categoryId.toString());
		const docSnap = await getDoc(docRef);
		const category = docSnap.data();

		const catPathname = currentCatPathname
			? `${category.handle}/${currentCatPathname}`
			: `${category.handle}`;

		if (category.parent) {
			const parentInfo = await getCategoryInfo(category.parent, catPathname);
			return {
				...category,
				parentHandle: parentInfo.handle,
				catPathname: parentInfo.catPathname,
			};
		} else {
			return { ...category, catPathname };
		}
	} catch (error) {
		console.error(error);
	}
};

export const getProducts = async (categoryId = undefined) => {
	try {
		let q;
		if (categoryId) {
			q = query(
				productsCollectionRef,
				where('product_cat', 'array-contains', categoryId),
			);
		} else {
			q = query(productsCollectionRef);
		}

		const querySnapshot = await getDocs(q);
		const products = [];
		querySnapshot.forEach(doc => {
			products.push(doc.data());
		});

		return products;
	} catch (error) {
		console.error(error);
	}
};

export const getProductByHandle = async handle => {
	try {
		const q = query(collection(db, 'products'), where('handle', '==', handle));

		const querySnapshot = await getDocs(q);
		let product;
		querySnapshot.forEach(doc => {
			product = doc.data();
		});

		return product;
	} catch (error) {
		console.error(error);
	}
};

export const searchProducts = async search => {
	try {
		const products = await getProducts();

		const filteredProducts = products.filter(product => {
			return Object.values(product).some(value => {
				if (typeof value === 'string') {
					return value.toLowerCase().includes(search.toLowerCase());
				}
				return false;
			});
		});

		return filteredProducts;
	} catch (error) {
		console.error(error);
	}
};

export const addPromoImage = async image => {
	try {
		const imageRef = doc(promoImagesCollectionRef);
		const imageDoc = { ...image, id: imageRef.id };
		await setDoc(imageRef, imageDoc);
	} catch (error) {
		console.error(error);
	}
};

export const getPromoImage = async () => {
	try {
		const q = query(promoImagesCollectionRef, orderBy('createdAt', 'desc'));

		const querySnapshot = await getDocs(q);
		const images = [];
		querySnapshot.forEach(doc => {
			images.push(doc.data());
		});

		return images[0];
	} catch (error) {
		console.error(error);
	}
};

export const getBranches = async () => {
	try {
		const q = query(collection(db, 'branches'));

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
