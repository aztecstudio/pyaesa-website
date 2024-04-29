import { storage } from '@/config/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

export const getPromoImage = async () => {
	try {
		const imagesRef = ref(storage, 'promos-images/');

		const res = await listAll(imagesRef);
		const images = res.items;

		images.sort((a, b) => b.name.localeCompare(a.name));
		const lastImageRef = images[0];
		const imageUrl = await getDownloadURL(lastImageRef);

		return imageUrl;
	} catch (error) {
		console.error(error);
	}
};
