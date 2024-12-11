import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
// };

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY!.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  basePath,
  assetPrefix,
  output: 'export',
};

export default nextConfig;
