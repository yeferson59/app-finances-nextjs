"use client"

import { ModeToggle } from "@/components/button-theme"
import { APP, NAVIGATION } from "@/lib/consts";
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
          <h1 className="text-pretty text-sm sm:text-xl md:text-2xl font-semibold">{APP.title}</h1>
        </Link>
        <div className="hidden md:flex-row md:gap-3 md:items-center md:flex">
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
      <div className="hidden md:flex md:flex-row items-center gap-4">
        {
          pathname === '/' && (
            <Link href='/login/sign-in'>
              <Button className="text-pretty">
                Iniciar sesión
              </Button>
            </Link>
          )
        }
        {
          pathname === '/' && (
            <Link href='/login/sign-up'>
              <Button className="text-pretty">
                Registrarse
              </Button>
            </Link>
          )
        }
        <ModeToggle/>
      </div>
      <div className="flex md:hidden">
        <DropdownMenuRadioGroupDemo />
      </div>
    </header>
  );
}