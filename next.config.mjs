// next.config.mjs
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +

              // JS
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
              "https://www.googletagmanager.com " +
              "https://www.google-analytics.com " +
              "https://www.google.com " +
              "https://www.gstatic.com; " +

              // API / Fetch / WebSockets
              "connect-src 'self' * " +
              "https://care-connect.merisehat.pk " +
              "https://portal.merisehat.pk " +
              "https://www.google-analytics.com " +
              "https://analytics.google.com " +
              "https://region1.google-analytics.com " +
              "https://region2.google-analytics.com " +
              "https://region3.google-analytics.com " +
              "https://region4.google-analytics.com " +
              "https://www.googletagmanager.com; " +

              // IMAGES
              "img-src 'self' data: blob: " +
              "https://getz-digital.s3.us-east-1.amazonaws.com " +
              "https://ms-images.s3.ap-southeast-1.amazonaws.com " +
              "https://ms-images-staging.s3.ap-southeast-1.amazonaws.com " +
              "https://d1irpg7po1rqdm.cloudfront.net " +
              "https://d3f7pvozodla0f.cloudfront.net " +
              "https://images.pexels.com " +
              "https://play-lh.googleusercontent.com " +
              "https://s.rozee.pk " +
              "https://reporting.essalab.tech " +
              "https://www.google-analytics.com " +
              "https://www.googletagmanager.com " +
              "https://www.google.com " +
              "https://getz-pharmadigital.s3.ap-southeast-1.amazonaws.com; " + // ✅ Fixed: semicolon at the end

              // CSS
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +

              // Fonts
              "font-src 'self' https://fonts.gstatic.com; " +

              // iFrames
              "frame-src " +
              "https://www.googletagmanager.com " +
              "https://www.google.com " +
              "https://www.youtube.com " +
              "https://www.youtube-nocookie.com;",
          }
        ]
      }
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "getz-digital.s3.us-east-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mywellogram-getz.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ms-images.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ms-images-staging.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1irpg7po1rqdm.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d3f7pvozodla0f.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.rozee.pk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "reporting.essalab.tech",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "portal.merisehat.pk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "staging.merisehat.pk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cmsapi.merisehat.pk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "getz-pharmadigital.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.youtube.com",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    rules: {},
  },
};

export default withNextIntl(nextConfig);