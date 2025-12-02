import type { NextConfig } from 'next'



const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-separator',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-slot',
  ],
}

export default nextConfig
