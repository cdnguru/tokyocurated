import "./globals.css";
export const metadata = {
  title: "Tokyo Curated — bespoke, human-led Tokyo itineraries",
  description: "50% more in 50% less time. Private driving concierge, secured reservations, and calm cadence — zero generic lists.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: [
      "https://gvwwl4nhmibwxszy.public.blob.vercel-storage.com/assets/placeholder.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
