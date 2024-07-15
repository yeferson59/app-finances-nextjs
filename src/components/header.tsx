"use client"

import { ModeToggle } from "@/components/button-theme"
import { APP, NAVIGATION } from "@/lib/consts";
import { useState } from "react";
import Link from "next/link";
import { DropdownMenuRadioGroupDemo } from "./navPhone";

export default function Header(){
  const [state, setState] = useState(false);
  return(
    <header className="flex flex-row justify-between items-center px-2 py-1 sm:px-6 md:px-8 md:py-2 border-b-2">
      <nav className="flex flex-row gap-4 cursor-pointer">
        <Link href="/" onClick={() => setState(!state)}>
          <h1 className="text-pretty text-sm sm:text-xl md:text-2xl font-semibold">{APP.title}</h1>
        </Link>
        <ul className="hidden md:flex-row md:gap-3 md:items-center md:flex">
          {
            NAVIGATION.map( link => (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            ))
          }
        </ul>
      </nav>
      <div className="hidden md:flex md:flex-row items-center gap-4">
        {
          state === false && (
            <Link href='/dashboard/sign-in' onClick={() => setState(!state)} className="rounded-md dark:bg-white dark:text-black bg-black text-white md:py-2 md:px-3 dark:hover:bg-slate-500 hover:bg-slate-800 hidden md:block">
              Iniciar sesión
            </Link>
          ) 
        }
        <ModeToggle/>
      </div>
      <div className="flex md:hidden">
        <DropdownMenuRadioGroupDemo active={state}/>
      </div>
    </header>
  );
}