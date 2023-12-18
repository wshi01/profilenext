const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

const isProd = process.env.NODE_ENV = 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/nextjs-blog-deployment': '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
}

module.exports = withNextra(nextConfig)
