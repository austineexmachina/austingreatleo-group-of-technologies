import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://austingreatleo.com"),
  title: {
    default: "Austinegreatleo Group of Technologies",
    template: "%s | Austinegreatleo Group"
  },
  description:
    "An independent technology group building ambitious ventures across AI, media, blockchain and next-generation communications.",
  applicationName: "Austinegreatleo Group of Technologies",
  openGraph: {
    title: "Austinegreatleo Group of Technologies",
    description: "Think beyond borders. Build beyond limits.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
