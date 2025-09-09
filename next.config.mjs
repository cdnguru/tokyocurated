/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    domains: ["gvwwl4nhmibwxszy.public.blob.vercel-storage.com"],
  }
};
export default nextConfig;
