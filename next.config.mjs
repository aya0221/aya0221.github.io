/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
  reactStrictMode: true,
  output: 'export',
};

export default nextConfig;
