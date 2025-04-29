/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, 
    domains: ["img.youtube.com"],
  },
  reactStrictMode: true,
  output: 'export',
};

export default nextConfig;
