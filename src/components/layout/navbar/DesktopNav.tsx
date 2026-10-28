
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { AUTH_LINKS, MAIN_NAV_LINKS } from "@/utils/nav-link";

export function DesktopNav() {
    const pathname = usePathname();

    const isActiveRoute = (href: string) =>
        pathname === href ||
        (href !== "/" && pathname.startsWith(`${href}/`));

    return (
        <nav
            aria-label="Desktop navigation"
            className="flex items-center gap-6"
        >
            {/* Main navigation */}
            <NavigationMenu>
                <NavigationMenuList className="gap-1">
                    {MAIN_NAV_LINKS.map((item) => {
                        const isActive = isActiveRoute(item.link);

                        return (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    render={<Link href={item.link} />}
                                    aria-current={
                                        isActive ? "page" : undefined
                                    }
                                    className={cn(
                                        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                        "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                        isActive &&
                                            "bg-accent text-accent-foreground font-bold",
                                    )}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Authentication links */}
            <div className="flex items-center gap-2">
                {AUTH_LINKS.map((item) => (
                    <Button
                        key={item.id}
                        variant="outline"
                        size="sm"
                        render={<Link href={item.link} />}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
        </nav>
    );
}
