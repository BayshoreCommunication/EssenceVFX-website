import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";
import LocalStorageCleanup from "@/components/shared/LocalStorageCleanup";
import RouteLoader from "@/components/shared/RouteLoader";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import "@/styles/globals.css";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { AppProvider } from "./AppContext";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
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
        <RouteLoader>
          <AppProvider>
            <Providers
              themeProps={{
                attribute: "class",
                defaultTheme: "light",
                enableSystem: false,
                disableTransitionOnChange: true,
              }}
            >
              <LocalStorageCleanup />
              <MainHeader />

              <div className="overflow-x-hidden">{children}</div>

              <MainFooter />
              <ScrollToTopButton />
            </Providers>
          </AppProvider>
        </RouteLoader>
      </body>
    </html>
  );
}
