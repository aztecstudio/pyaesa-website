import { NextResponse } from 'next/server';
import { verifyIdToken } from './utils/auth';

export const config = {
	matcher: ['/admin/:path*'],
};

const publicRoutes = ['/admin', '/admin/auth'];

export async function middleware(req) {
	const authToken = req.cookies.get('authToken')?.value;
	const isTokenValid = await verifyIdToken(authToken);
	const requestedPage = req.nextUrl.pathname;

	if (requestedPage === '/admin') {
		return NextResponse.redirect(new URL('/admin/auth', req.url));
	}

	if (!isTokenValid && !publicRoutes.includes(requestedPage)) {
		return NextResponse.redirect(new URL('/admin/auth', req.url));
	}

	if (isTokenValid && publicRoutes.includes(requestedPage)) {
		try {
			return NextResponse.redirect(new URL('/admin/promociones', req.url));
		} catch (error) {
			return NextResponse.next();
		}
	}

	return NextResponse.next();
}
