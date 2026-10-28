
import Link from "next/link";
import { Home,  ArrowUpRight, GitBranchPlus, FaceAngry, Link2Icon } from "lucide-react";

const footerLinks = {
    Explore: [
        { name: "Browse Properties", href: "/properties" },
        { name: "For Renters", href: "/properties" },
        { name: "Add Property", href: "/properties/add" },
    ],
    Account: [
        { name: "Sign In", href: "/login" },
        { name: "Create Account", href: "/register" },
    ],
};

export const Footer = () => {
    return (
        <footer className="border-t bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main footer */}
                <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                        >
                            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                <Home className="size-5" />
                            </span>

                            <span className="text-xl font-bold tracking-tight">
                                Property <span className="text-primary">Pulse</span>
                            </span>
                        </Link>

                        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                            Find your perfect rental property and make your
                            next move with confidence.
                        </p>

                        <div className="flex items-center gap-3 pt-1">
                            <Link
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <GitBranchPlus className="size-4" />
                            </Link>

                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <FaceAngry className="size-4" />
                            </Link>

                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <Link2Icon className="size-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-4">
                            <h3 className="text-sm font-semibold">{title}</h3>

                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Get in touch</h3>

                        <p className="text-sm leading-6 text-muted-foreground">
                            Have questions about finding your next property?
                            We&apos;re here to help.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                            Contact us
                            <ArrowUpRight className="size-4" />
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-3 border-t py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p className="text-xs text-muted-foreground sm:text-sm">
                        © {new Date().getFullYear()} Property Pulse. All rights reserved.
                    </p>

                    <p className="text-xs text-muted-foreground sm:text-sm">
                        Made for finding a place to call home.
                    </p>
                </div>
            </div>
        </footer>
    );
};
