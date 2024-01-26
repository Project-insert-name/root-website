/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
    images: {
        remotePatterns: [
            {
                hostname: "cdn.sanity.io",
            },
        ],
        dangerouslyAllowSVG: true,
    },
}

module.exports = nextConfig
