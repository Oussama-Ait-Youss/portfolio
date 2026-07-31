/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export',
  // If your repository name is "my-portfolio", uncomment and set this:
  // assetPrefix: '/my-portfolio/',
  // basePath: '/my-portfolio',
  images: {
    unoptimized: true, // Required for static export images
  },
};

export default nextConfig;
