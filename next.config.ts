import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/svg-length',
        destination: '/svg-path-length-calculator',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
