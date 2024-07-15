"use client"

import { ModeToggle } from "@/components/button-theme"
import { APP, NAVIGATION } from "@/lib/consts";
import { useState } from "react";
import Link from "next/link";

export default function Header(){
  const [state, setState] = useState(false);
  return(
    <header className="flex flex-row justify-between items-center px-8 py-2 border-b-2">
      <nav className="flex flex-row gap-4 cursor-pointer">
        <a href="/">
          <h1 className="text-pretty lg:text-2xl font-semibold">{APP.title}</h1>
        </a>
        <ul className="flex flex-row gap-3 items-center">
          {
            NAVIGATION.map( link => (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            ))
          }
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-4">
        <Link href={state === false ? '/dashboard/sign-in' : '/dashboard/sign-up'} onClick={() => setState(!state)} className="rounded-md dark:bg-white dark:text-black bg-black text-white py-2 px-3 dark:hover:bg-slate-500 hover:bg-slate-800">
          {
            state === false ? 'Iniciar sesión' : 'Registrarse'
          }
        </Link>
        <ModeToggle/>
      </div>
    </header>
  );
}