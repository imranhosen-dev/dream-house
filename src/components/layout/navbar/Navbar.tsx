import React from "react";
import { DesktopNav } from "./DesktopNav";
import Image from "next/image";
import logo from "@/assets/house.png";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between border-b-2 py-6 px-8  ">
            <div className="flex items-center gap-2">
                <Image src={logo} width={50} height={50} alt="Dream House" />
                <strong className="text-xl flex items-center">
                    Dream <p className="text-purple-500">House</p>
                </strong>
            </div>
           
            <div className="hidden lg:flex">
                <DesktopNav />
            </div>
            <div className="flex lg:hidden">
                <MobileNav />
            </div>
        </nav>
    );
};
