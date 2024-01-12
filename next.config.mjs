export default {
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};
