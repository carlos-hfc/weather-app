/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'flagsapi.com',
        protocol: 'https'
      },
      {
        hostname: 'openweathermap.org',
        protocol: 'https'
      },
    ]
  }
};

module.exports = nextConfig;
