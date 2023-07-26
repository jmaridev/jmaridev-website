/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow images from external sources
  images: {
    domains: [
      "via.placeholder.com",
      "www.google.com",
      "picsum.photos",
      "www.w3schools.com",
    ],
  },
};

module.exports = nextConfig;
