/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // これを追加
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true  // 型チェックエラーを無視
    },
    eslint: {
      ignoreDuringBuilds: true  // ESLintエラーを無視
    },
    images: {
      domains: ['ec1114.ap-northeast-1.elasticbeanstalk.com'], // 必要に応じて画像ドメインを追加
    }
  };
  
  module.exports = nextConfig;