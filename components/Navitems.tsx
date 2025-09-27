import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const nav_links = [
    {name: "Dashboard", href: "/"}, 
    {name: "Search", href: "/search"},
    {name: "Watchlist", href: "/watchlist"}
]

const Navitems = () => {

    const pathname = usePathname()
    const isActive = (path:string) => {
        return pathname === path
    }

  return (
    <div className="hidden sm:flex flex-row items-center justify-between gap-4 sm:gap-6">
      {nav_links.map((link) => (
        <Link 
            key={link.name}
            href={link.href}
            className={`hover:text-yellow-500 transition-colors ${isActive(link.href) ? 'text-gray-100' : ''}`}
        >
            {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navitems;
