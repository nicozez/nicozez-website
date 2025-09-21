import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Zezza",
  description: "Nicolas Zezza is an 21-year-old startup operator and researcher building energy-effienct computing. He is recognized for his past research in Image Systems and contracting for various tech companies. He studies EE and the creative arts at Stanford.",
  keywords: ["Nicolas Zezza", "nicozez", "he", "stanford", "startup", "founder", "building", "engineer", "neuromorphics", "machine learning", "ai", "electrical engineering", "filmmaker", "neuromorphic computing"],
	authors: [{ name: "Nicolas Zezza" }],
	creator: "Nicolas Zezza",
	publisher: "Nicolas Zezza",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
  metadataBase: new URL("https://nicozez.com"),
	alternates: {
		canonical: "https://nicozez.com",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={`${fira_code.className} bg-dots bg-dots-vignette`}>
        {children}
      </body>
    </html>
  );
}
