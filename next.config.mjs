// Helper function to merge configurations
function mergeConfig(baseConfig, additionalConfig) {
  if (!additionalConfig) {
    return baseConfig;
  }

  for (const key in additionalConfig) {
    if (
      typeof baseConfig[key] === "object" &&
      !Array.isArray(baseConfig[key])
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...additionalConfig[key],
      };
    } else {
      baseConfig[key] = additionalConfig[key];
    }
  }

  return baseConfig;
}

// Base Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    unoptimized: true, // Disable image optimization
  },
  experimental: {
    webpackBuildWorker: true, // Experimental feature
    parallelServerBuildTraces: true, // Experimental feature
    parallelServerCompiles: true, // Experimental feature
  },
  output: "export", // Enable static export
};

// Attempt to load user-specific configuration
async function getConfig() {
  let userConfig;
  try {
    userConfig = await import("./v0-user-next.config");
  } catch (e) {
    // Ignore error if user configuration is not found
    userConfig = undefined;
  }

  // Merge and return the final configuration
  return mergeConfig(nextConfig, userConfig?.default || {});
}

export default await getConfig();
