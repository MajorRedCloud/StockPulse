"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navitems from "./Navitems";

const DropdownItems = () => {
  const router = useRouter();

  const handleSignOut = () => {
    // todo implement sign out functionality
    router.push("/");
  };

  const user = { name: "John Doe", email:"Testing1243@gmail.com"};

  return (
    
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex-row items-center gap-2 hidden sm:flex hover:text-yellow-500 cursor-pointer">
          <Image
            src={"/assets/images/user.png"}
            alt="User Profile"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="font-bold">John Doe</p>
          </div>
          
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400 bg-gray-800">
          <DropdownMenuLabel className="flex relative items-center flex-col gap-1 py-2 px-3">
          <div className="flex flex-row items-center gap-2">
          <Image
            src={"/assets/images/user.png"}
            alt="User Profile"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="font-semibold">{user.name}</p>
          </div>

          <p className="font-medium">{user.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-600"/>
          <DropdownMenuItem onClick={() => handleSignOut} className="text-center items-center justify-center text-red-500 font-medium focus:bg-transparent transition-colors cursor-pointer hover:text-red-600">
            Sign Out
          </DropdownMenuItem>
          <DropdownMenuSeparator className="hidden not-sm:block bg-gray-600"/>
          <nav className="sm:hidden">
            <Navitems />
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    
  );
};

export default DropdownItems;
