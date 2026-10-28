"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MAIN_NAV_LINKS } from "@/utils/nav-link";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const DesktopNav = () => {
    const pathName = usePathname();
    return (
        <div className="flex items-center gap-5">
            
            <NavigationMenu>
                <NavigationMenuList>
                    {MAIN_NAV_LINKS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathName === item.link;
                        return (
                            <NavigationMenuItem className='space-x-6'>
                                <Link href={item.link} >
                                    <NavigationMenuLink
                                        className={cn(
                                            "flex items-center gap-2",
                                            isActive &&
                                                "bg-accent text-accent-foreground font-semibold",
                                        )}
                                    >
                                        {Icon}
                                        {item.name}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};
