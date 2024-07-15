"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ModeToggle } from "@/components/button-theme"
import Link from "next/link";
import { Menu } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
   
export function DropdownMenuRadioGroupDemo({
  active
}: {
  active:boolean
}) {
  const [state, setState] = useState(active)
  const [position, setPosition] = useState("bottom")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu></Menu>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
        <DropdownMenuSeparator />
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        <DropdownMenuSeparator />
        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <div className="flex md:flex-row items-center gap-2 justify-between">
          <ModeToggle/>
          {
            state === false && (
              <Link href='/dashboard/sign-in' onClick={() => setState(!state)} className="rounded-md dark:bg-white dark:text-black bg-black text-white py-1 px-2 dark:hover:bg-slate-500 hover:bg-slate-800">
                Iniciar sesión
              </Link>
            )
          }
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}