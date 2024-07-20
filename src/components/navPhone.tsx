"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ModeToggle } from "@/components/button-theme"
import Link from "next/link";
import { Menu } from "lucide-react"
import { NAVIGATION, NAVIGATION_AUTH } from "@/lib/consts";

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
          <DropdownMenuSeparator />
        </ul>
        </DropdownMenuRadioGroup>
        <section className="flex flex-col items-center justify-center gap-2 mt-2">
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
        </section>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}