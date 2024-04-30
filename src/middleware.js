import { NextResponse } from 'next/server';

export const config = {
	matcher: ['/admin', '/admin/auth', '/admin/promociones'],
};

const publicRoutes = ['/admin', '/admin/auth'];

export async function middleware(req) {
	const authToken = req.cookies.get('authToken');
	const requestedPage = req.nextUrl.pathname;

	if (requestedPage === '/admin') {
		return NextResponse.redirect(new URL('/admin/auth', req.url));
	}

	if (!authToken && !publicRoutes.includes(requestedPage)) {
		return NextResponse.redirect(new URL('/admin/auth', req.url));
	}

	if (authToken && publicRoutes.includes(requestedPage)) {
		try {
			return NextResponse.redirect(new URL('/admin/promociones', req.url));
		} catch (error) {
			return NextResponse.next();
		}
	}

	return NextResponse.next();
}
