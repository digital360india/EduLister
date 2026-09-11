// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// // next.config.js
// module.exports = {
//   experimental: {
//     staleTimes: {
//       dynamic: 0,
//     },
//   },
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
//   // trailingSlash: true,
//   async redirects() {
//     return [
//       {
//         source: "/blogs/:slug",
//         destination: "/",
//         basePath: false,
//         permanent: false,
//       },
//       {
//         source: "/blogs",
//         destination: "/",
//         basePath: false,
//         permanent: false,
//       },
//     ];
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      { source: "/blogs/:slug", destination: "/", basePath: false, permanent: false },
      { source: "/blogs", destination: "/", basePath: false, permanent: false },
    ];
  },
};

module.exports = nextConfig;