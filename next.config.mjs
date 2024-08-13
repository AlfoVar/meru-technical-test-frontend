/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true, // Puedes cambiar esto a false si no es una redirección permanente
      },
    ];
  },
};

export default nextConfig;
