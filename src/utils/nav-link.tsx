import { House, Search, PlusCircle, UserRound } from "lucide-react";

export const MAIN_NAV_LINKS = [
    {
        id: "home",
        name: "Home",
        link: "/",
        icon: <House className="size-4" />,
    },
    {
        id: "properties",
        name: "Properties",
        link: "/properties",
        icon: <Search className="size-4" />,
    },
    {
        id: "add-property",
        name: "Add Property",
        link: "/properties/create",
        icon: <PlusCircle className="size-4" />,
    },
];

export const AUTH_LINKS = [
    {
        id: "login",
        name: "Login",
        link: "/login",
    },
    {
        id: "register",
        name: "Register",
        link: "/register",
    },
];
