import { storage } from '@/config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addPromoImage } from '../database';

export const uploadImage = async file => {
	const now = new Date();
	const formattedDate = now
		.toISOString()
		.replace(/[:-]/g, '')
		.replace('T', '-')
		.replace(/\.\d{3}Z/, '');
	const imageName = `promo-${formattedDate}`;
	const filePath = `promos-images/${imageName}`;
	const storageRef = ref(storage, filePath);

	const { ref: imageRef, metadata } = await uploadBytes(storageRef, file);
	const imageUrl = await getDownloadURL(imageRef);

	const imageDoc = {
		name: imageName,
		imageUrl,
		path: metadata.fullPath,
		createdAt: metadata.timeCreated,
		updatedAt: metadata.updated,
	};

	addPromoImage(imageDoc);
};
