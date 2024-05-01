'use server';
import { revalidateTag } from 'next/cache';

export default async function revalidatePromoImage() {
	revalidateTag('promo_image');
}
