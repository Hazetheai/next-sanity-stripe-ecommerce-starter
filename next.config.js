const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = {
  redirects: [
    {
      source: "/films",
      destination: "/filmmaker",
      permanent: false,
    },
  ],
  rewrites: () => [STUDIO_REWRITE],
  images: { domains: ["cdn.sanity.io"] },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/sanity/global-data")();
    }
    return config;
  },
};
