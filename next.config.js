const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/markdown-portfolio' : '',
  assetPrefix: isProd ? '/markdown-portfolio/' : '',
  trailingSlash: true
}