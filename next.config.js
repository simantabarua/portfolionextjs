/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
