import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HOME_DESCRIPTION =
  "Serving Scenic Ogden and the Surrounding Areas since 2004. Trusted, Experienced, Professional.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: SITE.tagline,
    template: `%s | ${SITE.name}`,
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: SITE.tagline,
    description: HOME_DESCRIPTION,
    url: SITE.origin,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
