/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  output: 'export',
  images: {
    unoptimized: true, // Required for static export images
  },
};

export default nextConfig;
