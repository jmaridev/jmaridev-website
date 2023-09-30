/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow images from external sources
  images: {
    domains: [
      "via.placeholder.com",
      "www.google.com",
      "picsum.photos",
      "www.w3schools.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
