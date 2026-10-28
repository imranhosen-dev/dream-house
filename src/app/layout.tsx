import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/navbar/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Property Pulse | Find Your Perfect Property",
        template: "%s | Property Pulse",
    },
    description:
        "Discover homes, apartments, and properties for sale with Property Pulse. Find your ideal property with confidence.",
    keywords: [
        "Property Pulse",
        "real estate",
        "properties for sale",
        "homes for sale",
        "apartments for sale",
        "buy property",
    ],
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${poppins.className} min-h-screen bg-background text-foreground antialiased`}
            >
                <header>
                    <Navbar />
                </header>

                <main className="flex-1">{children}</main>
            </body>
        </html>
    );
}
