import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotlight-snowy.vercel.app"),
  title: {
    default: "Spencer Sharp - Software designer, founder, and amateur astronaut",
    template: "%s - Spencer Sharp",
  },
  description:
    "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
  icons: {
    apple: "/avatar-icon.png",
  },
  openGraph: {
    title: "Spencer Sharp - Software designer, founder, and amateur astronaut",
    description:
      "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
    url: "/",
    siteName: "Spencer Sharp",
    images: [{ url: "/avatar.webp", width: 512, height: 512 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Spencer Sharp - Software designer, founder, and amateur astronaut",
    description:
      "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
    images: ["/avatar.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
              </div>
            </div>

            <div className="relative flex w-full flex-col">
              <Navbar />
              <div className="flex-none" style={{
                height: 'var(--content-offset, 0px)'
              }}></div>
              <main className="flex-auto">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
