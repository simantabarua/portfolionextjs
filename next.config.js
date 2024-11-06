/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    domains: ["https://i.ibb.co"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
// firebase deploy --only hosting:simanta
