import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

function buildRemotePatterns() {
  const patterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
    {
      protocol: "http",
      hostname: "localhost",
      port: "8080",
      pathname: "/**",
    },
  ];

  try {
    const url = new URL(apiUrl);
    if (url.hostname && url.hostname !== "localhost") {
      patterns.push({
        protocol: url.protocol.replace(":", "") as "http" | "https",
        hostname: url.hostname,
        ...(url.port ? { port: url.port } : {}),
        pathname: "/**",
      });
    }
  } catch {
    // URL inválida — solo localhost
  }

  return patterns;
}

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: buildRemotePatterns(),
  },
};

export default nextConfig;
