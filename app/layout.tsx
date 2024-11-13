import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap", // optional for better loading performance
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
      <body className={clsx("antialiased", montserrat.className)}>
        <Providers themeProps={{ attribute: "class" }}>
          <MainHeader />

          <div className="overflow-x-hidden">{children}</div>

          <MainFooter />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
