/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "frontendzone.com",
      "www.frontendzone.com",
    ],
  },
};

export default nextConfig;
