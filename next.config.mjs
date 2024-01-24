import remarkGFM from 'remark-gfm';
import remarkUnwrapImage from 'remark-unwrap-images';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // webpack: (config) => ({
  //   ...config,
  //   module: {
  //     ...config.module,
  //     rules: config.module.rules.concat([
  //       {
  //         test: /\.md/,
  //         type: 'asset/source',
  //       },
  //     ]),
  //   },
  // }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGFM, remarkUnwrapImage],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);