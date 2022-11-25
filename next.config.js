module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.hidoglovers.com/:path*',
        permanent: true,
      },
    ]
  },
}
