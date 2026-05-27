import { useEffect } from "react";

export const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    const url = new URL(to, window.location.origin);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    window.location.replace(url.toString());
  }, [to]);

  return <div style={{ padding: "20px" }}>Redirecting to {to}...</div>;
};
