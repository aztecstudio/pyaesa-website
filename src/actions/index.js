'use server';
import { revalidateTag } from 'next/cache';

export async function revalidatePromoImage() {
	revalidateTag('promo_image');
}
