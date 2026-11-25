import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://austingreatleo.com"),
  title: {
    default: "Austingreatleo Group of Technologies",
    template: "%s | Austingreatleo Group"
  },
  description:
    "An independent technology group building ambitious ventures across AI, media, blockchain and next-generation communications.",
  applicationName: "Austingreatleo Group of Technologies",
  openGraph: {
    title: "Austingreatleo Group of Technologies",
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
