// app/[locale]/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIntlClientProvider } from "next-intl";
import ogImage from "@/assets/images/png/ogImage.jpeg";
import Script from 'next/script';
import NavSwitcher from "@/components/navswitcher/NavSwitcher";
import Footer from "@/components/footer/Footer";
import HealthcareVerificationModal from "@/components/healthcareVerificationModal/healthcareVerificationModal";

// ✅ Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Control Diabetes & Obesity with an Optimized Health Solution",
  description: "Sem-P offers a powerful weight loss medication solution for managing blood sugar levels and supporting long-term metabolic health. Consult an expert doctor to optimize your treatment plan.",
  openGraph: {
    title: "Control Diabetes & Obesity with an Optimized Health Solution",
    description: "Sem-P offers a powerful weight loss medication solution for managing blood sugar levels and supporting long-term metabolic health. Consult an expert doctor to optimize your treatment plan.",
    url: 'https://ms-images-staging.s3.ap-southeast-1.amazonaws.com/sem-p.jpeg',
    images: [
      {
        url: 'https://ms-images-staging.s3.ap-southeast-1.amazonaws.com/sem-p.jpeg', // ✅ replace with your actual OG image path or full URL
        width: 1200,
        height: 630,
        alt: "Sem-P",
      },
    ],
  },
};


// ✅ Make layout async so we can load locale messages dynamically
export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  // ✅ Dynamically load translation JSON
  const messages =
    locale === "ur"
      ? (await import("@/app/data/ur.json")).default
      : (await import("@/app/data/en.json")).default;

  const isProduction = process.env.NEXT_PUBLIC_HOSTNAME;


  return (
    <html lang={locale} >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      {isProduction == "production" && (
        <>
          {/* Google Analytics gtag.js */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-9BGLKEGTJK"
            strategy="afterInteractive"
            async
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9BGLKEGTJK');
          `}
          </Script>

          {/* Google Tag Manager */}
          <Script id="gtm-head" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5R5VP2M2');
          `}
          </Script>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {isProduction == "production" && (
          <>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-5R5VP2M2"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}
          </>
        )}

        <NextIntlClientProvider locale={locale} messages={messages}>
          <HealthcareVerificationModal />
          <NavSwitcher />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
