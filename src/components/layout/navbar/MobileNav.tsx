"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/house.png";
import { AUTH_LINKS, MAIN_NAV_LINKS } from "@/utils/nav-link";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            {/* Trigger Button */}
            <SheetTrigger
                render={
                    <Button variant="outline" size="icon" aria-label="Open menu">
                        <Menu className="h-5 w-5" />
                    </Button>
                }
            />
            
            <SheetContent side="right" className="w-75 sm:w-100 flex flex-col">
                {/* Header */}
                <SheetHeader className="border-b pb-4">
                    <SheetTitle className="flex items-center gap-2">
                        <Image src={logo} height={40} width={40} alt="Dream House" />
                        <span className="text-xl font-bold">
                            Dream <span className="text-purple-500">House</span>
                        </span>
                    </SheetTitle>
                </SheetHeader>
                
                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="grid gap-1">
                        {MAIN_NAV_LINKS.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.link;

                            return (
                                <li key={item.id}>
                                    <SheetClose
                                        render={
                                            <Link
                                                href={item.link}
                                                className={cn(
                                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                                                    isActive && "bg-accent text-accent-foreground font-semibold"
                                                )}
                                            />
                                        }
                                    >
                                        {Icon}
                                        {item.name}
                                    </SheetClose>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer (Login / Signup Buttons) */}
                <SheetFooter className="border-t pt-4 flex flex-col gap-2">
                    {AUTH_LINKS.map((item) => (
                        <SheetClose
                            key={item.id}
                            render={
                                <Link href={item.link} className="w-full">
                                    <Button variant={ "outline"} className="w-full">
                                        {item.name}
                                    </Button>
                                </Link>
                            }
                        />
                    ))}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};