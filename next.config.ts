import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile exists in the user profile directory above this repo;
  // pin tracing to the project root so Next doesn't guess wrong.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
