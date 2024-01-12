export default {
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack: (config) => {
      config.infrastructureLogging = {
      
      };
      return config;
    },
}