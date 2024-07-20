"use client"

import { ModeToggle } from "@/components/button-theme"
import { APP, NAVIGATION, NAVIGATION_AUTH } from "@/lib/consts";
import Link from "next/link";
import { DropdownMenuRadioGroupDemo } from "./navPhone";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Header(){
  const pathname = usePathname()

  return(
    <header className="flex flex-row justify-between items-center px-2 py-1 sm:px-6 md:px-8 md:py-2 border-b-2">
      <nav className="flex flex-row gap-6 cursor-pointer">
        <Link href="/">
          <h1 className="text-pretty text-sm md:text-xl lg:text-2xl font-semibold">{APP.title}</h1>
        </Link>
        <div className="hidden lg:flex-row lg:gap-3 lg:items-center lg:flex">
          {
            NAVIGATION.map( link => (
              <Link
              key={link.id}
              href={link.link} 
              className="hover:text-opacity-75">
                {link.name}
              </Link>
            ))
          }
        </div>
      </nav>
      <div className="hidden lg:flex md:flex-row items-center gap-4">
        {
          pathname === '/' && (
            NAVIGATION_AUTH.map( auth => (
              <Link
              key={auth.id}
              href={auth.link}
              >
                <Button className="text-pretty">
                  {auth.name}
                </Button>
              </Link>
            ))
          )
          }
        <ModeToggle/>
      </div>
      <div className="flex lg:hidden">
        <DropdownMenuRadioGroupDemo />
      </div>
    </header>
  );
}