/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    // Enable styled-components
    styledComponents: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "frontendzone.com",
      "www.frontendzone.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
