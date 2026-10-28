import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Property Pulse | Find Your Perfect Property",
    keywords: [
        "Property Pulse",
        "real estate",
        "properties for sale",
        "homes for sale",
        "apartments for sale",
        "buy property",
        "sell property",
        "real estate marketplace",
    ],
    description:
        "Discover, buy, sell, and explore properties with Property Pulse. Find your ideal home, apartment, or investment property with confidence. ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                poppins.className,
                "font-sans",
            )}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header>
                        <Navbar />
                    </header>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
