/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [{
      source: '/api/saveFile',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        }
      ]

    }]
  }
}

module.exports = nextConfig
