import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/** @type {import('next').NextConfig} */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				port: '',
				pathname: process.env.NEXT_PUBLIC_REMOTE_PATTERN_PATHNAME,
			},
		],
	},
	sassOptions: {
		includePaths: [join(__dirname, 'src/scss')],
		prependData: `@import "main.scss";`,
	},
};

export default nextConfig;
