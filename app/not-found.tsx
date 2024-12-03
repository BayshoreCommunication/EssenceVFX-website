"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [counter, setCounter] = useState(2);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(interval);
        }
        return prevCounter - 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold">401 - Page Not Found</h1>
      <p className="text-lg mt-4">
        {`Redirecting to the home page in ${counter} seconds...`}
      </p>
    </div>
  );
}
