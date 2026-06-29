/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This dev machine's inotify watch pool is often saturated by other tools.
  // When WATCHPACK_POLLING=true is set, Watchpack polls instead of using
  // inotify; here we narrow what gets polled so it stays cheap.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
        poll: process.env.WATCHPACK_POLLING ? 1000 : undefined,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
