import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OgaBuzz - Stay Informed, Stay Ahead",
    short_name: "OgaBuzz",
    description:
      "The First News App Built For You. Personalized Headlines And Real-Time Local Reporting, Powered By AI And Your Location.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#3b82f6",
    categories: ["news", "entertainment", "sports", "politics"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
