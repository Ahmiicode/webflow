/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable LightningCSS to prevent linux-x64 build errors on Vercel
    optimizeCss: false,
  },
};

export default nextConfig;
