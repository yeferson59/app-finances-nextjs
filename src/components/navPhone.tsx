"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ModeToggle } from "@/components/button-theme"
import Link from "next/link";
import { Menu } from "lucide-react"
import { NAVIGATION } from "@/lib/consts";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation";
   
export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom")

  const pathname = usePathname()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu></Menu>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <Link href='/'>
          <DropdownMenuRadioItem value="Inicio">Inicio</DropdownMenuRadioItem>
        </Link>
        <ul>
          {
            NAVIGATION.map( link => (
              <li key={link.id}>
                <DropdownMenuSeparator />
                <Link href={link.link}>
                  <DropdownMenuRadioItem value={link.name}>{link.name}</DropdownMenuRadioItem>
                </Link>
              </li>
            ))
          }
        </ul>
        </DropdownMenuRadioGroup>
        <div className="flex md:flex-row items-center gap-2 justify-between">
          <ModeToggle/>
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
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}