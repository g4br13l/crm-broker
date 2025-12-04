import type { NextConfig } from 'next'



const nextConfig: NextConfig = {
  reactStrictMode: false,
  reactCompiler: true,
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-separator',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-slot',
  ],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    browserDebugInfoInTerminal: true,
  },
}

export default nextConfig
