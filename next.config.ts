import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['books.google.com', 'media.istockphoto.com'], // Adiciona "books.google.com" à lista de domínios permitidos
  },
};

export default nextConfig;
