"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const RouteLoader = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current pathname
  const [loading, setLoading] = useState(true); // Initially show the loader

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing loader after 5 seconds
    }, 4000); // Minimum 5 seconds loading time

    // Trigger loading on route change
    setLoading(true);

    return () => clearTimeout(timer); // Clear the timer on unmount or when pathname changes
  }, [pathname]); // Runs whenever the pathname changes (on route change)

  // If still loading, show the loader
  if (loading) return <Loading />;

  // When loading is complete, show the page content
  return <>{children}</>;
};

export default RouteLoader;
