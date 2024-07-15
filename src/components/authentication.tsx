import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Authentication({
  type
}:
{
  type:string
}) {
  return (
    <div className="w-full lg:grid lg:min-h-[300px] lg:grid-cols-2 xl:min-h-[500px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">
              {
                type === 'signIn' ? 'Iniciar sesión' : 'Registrarse'
              }
            </h1>
            <p className="text-balance text-muted-foreground">
              Ingrese su información personal
            </p>
          </div>
          <div className="grid gap-4">
            {
              type === 'signUp' && (
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                  />
                </div>
              )
            }
            {
              type === 'signUp' && (
                <div className="grid gap-2">
                  <Label htmlFor="email">Primer apellido</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                  />
                </div>
              )
            }
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@ejemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              {
                type === 'signIn' ? (
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                ) : (
                  <Label htmlFor="password">Contraseña</Label>
                )
              }
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              {
                type === 'signIn' ? 'Iniciar sesión' : 'Registrarse'
              }
            </Button>
            <Button variant="outline" className="w-full">
              Iniciar sesión con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {
              type === 'signIn' ? '¿Todavía no estás registrado? ' : '¿Ya estás registrado? '
            }
            {
              type === 'signIn' ? (
                <Link href="/dashboard/sign-up" className="underline">
                  Registrarse
                </Link>
              ) : (
                <Link href="/dashboard/sign-in" className="underline">
                  Iniciar sesión
                </Link>
              )
            }
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}