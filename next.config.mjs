/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This is a single-page Tailwind portfolio: inlining its compact stylesheet
  // removes the render-blocking CSS request on a visitor's first load.
  experimental: {
    inlineCss: true,
  },
  // Cloudflare Pages serves this portfolio as a static site from `out/`.
  output: "export",
  images: {
    unoptimized: true,
  },
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
