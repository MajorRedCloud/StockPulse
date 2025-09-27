"use client"

import Image from "next/image";
import React from "react";
import Navitems from "./Navitems";
import DropdownItems from "./DropdownItems";

const Header = () => {
  return (
  <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 flex justify-between items-center py-4 text-gray-500 bg-gray-800">

        {/* logo */}
        <Image
          src={"/assets/images/logo.png"}
          alt="StockPulse Logo"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => window.location.href = "/"}
        />

        {/* Navigation Links */}
        <Navitems />

        {/* User Profile and actions*/}
        <DropdownItems />
      </div>
    </header>
  );
};

export default Header;
