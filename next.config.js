/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/dG4atM8XsP",
        permanent: true,
      },
      {
        source: "/",
        destination: "/discord",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
