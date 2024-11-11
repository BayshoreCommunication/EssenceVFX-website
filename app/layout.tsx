import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import localFont from "next/font/local";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import Loading from "./loading";
import RouteLoader from "@/components/shared/RouteLoader";

const helvetica = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const helveticaBold = localFont({
  src: "./fonts/Helvetica-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const helveticaLight = localFont({
  src: "./fonts/helvetica-light.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://essence-vfx-website.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "antialiased",
          helvetica.className,
          helveticaBold.className,
          helveticaLight.className
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <RouteLoader>
            <MainHeader />
            <div className="overflow-x-hidden">{children}</div>

            <MainFooter />
          </RouteLoader>
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
