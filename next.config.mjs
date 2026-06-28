/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/premium",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
