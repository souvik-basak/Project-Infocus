/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_PRIVATE_KEY: process.env.REACT_APP_PRIVATE_KEY,
    REACT_APP_CONTRACT_KEY: process.env.REACT_APP_CONTRACT_KEY,
    REACT_APP_RPC: process.env.REACT_APP_RPC,
    NEXT_APP_PINATA_KEY: process.env.NEXT_APP_PINATA_KEY,
    NEXT_APP_PINATA_SECRET_KEY: process.env.NEXT_APP_PINATA_SECRET_KEY,
  },
}

module.exports = nextConfig
