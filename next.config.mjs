/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
};

export default nextConfig;
