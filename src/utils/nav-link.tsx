import { AdIcon, BuildingIcon, Contact,  HomeIcon, InfoIcon, User2Icon,  } from "lucide-react";

// Main Public Navigation Links
export const MAIN_NAV_LINKS = [
    { id: 1, name: "Home", link: "/", icon: <HomeIcon/> },
    { id: 2, name: "Properties", link: "/properties", icon: <BuildingIcon/> },
    {
        id: 6, name: 'Add Property', link: '/add-property', icon: <AdIcon/>
    },
    { id: 3, name: "Agents", link: "/agents", icon: <User2Icon/> },
    { id: 4, name: "About Us", link: "/about", icon: <InfoIcon/> },
    { id: 5, name: "Contact", link: "/contact", icon: <Contact/> },
];

// Auth Links (Shown when user is NOT logged in)
export const AUTH_LINKS = [
    { id: 101, name: "Login", link: "/login", variant: "outline" },
    { id: 102, name: "Sign Up", link: "/register", variant: "primary" },
];

// User Menu Links (Shown when user IS logged in)
export const USER_MENU_LINKS = [
    {
        id: 201,
        name: "Dashboard",
        link: "/dashboard",
        icon: "LayoutDashboardIcon",
    },
    {
        id: 202,
        name: "My Properties",
        link: "/dashboard/properties",
        icon: "BuildingIcon",
    },
    {
        id: 203,
        name: "Favorites",
        link: "/dashboard/favorites",
        icon: "HeartIcon",
    },
    {
        id: 204,
        name: "Settings",
        link: "/dashboard/settings",
        icon: "SettingsIcon",
    },
    {
        id: 205,
        name: "Logout",
        link: "#",
        icon: "LogOutIcon",
        isAction: true, // Flag to trigger a logout function instead of navigating
    },
];
