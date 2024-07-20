"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent, useState } from "react"
import { createUser, getUser } from "@/app/lib/actions"

export default function Authentication({
  type
}:
{
  type:string
}) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isCorrect, setIsCorrect] = useState(true)
  const [email, setEmail] = useState("")
  const [errorLogin, setErrorLogin] = useState(false)

  const router = useRouter()

  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    if(type === 'signUp'){
      if(password !== confirmPassword){
        setIsCorrect(false)
        return
      }
      createUser(formData)
      router.push('/login/sign-in/')
    }
    if(type === 'signIn'){
      const isUser =  await getUser(formData)
      if(!isUser){
        setErrorLogin(true)
        return
      }
      router.push('/dashboard/')
    }
  }
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
          <form className="grid gap-4" onSubmit={handleSubmit}>
            {
              type === 'signUp' && (
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    name="name"
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
                    name="lastName"
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
                name="email"
                type="email"
                placeholder="m@ejemplo.com"
                required
                onChange={(e) => setEmail(e.target.value)}

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
              <Input 
              id="password"
              name="password"
              type="password" 
              required value={password} 
              onChange={(e) => setPassword(e.target.value)}
              />
              {
                isCorrect === false && type === 'signUp' && (
                  <span className="text-pretty text-red-600 text-sm font-semibold">Las contraseñas no son iguales</span>
                )
              }
              {
                errorLogin === true && (
                  <span className="text-pretty text-red-600 text-sm font-semibold">No coincide la contraseña o el correo suministrado</span>
                )
              }
            </div>
            {
              type === 'signUp' && (
                <div className="grid gap-2">
                  <Label htmlFor="password">Confirmar contraseña</Label>
                  <Input 
                  id="confirmPassword"
                  name="confirmPassword" 
                  type="password" 
                  required value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              )
            }
            {
              isCorrect === false && type === 'signUp' && (
                <span className="text-pretty text-red-600 text-sm font-semibold">Las contraseñas no son iguales</span>
              )
            }
            <Button type="submit" className="w-full">
              {
                type === 'signIn' ? 'Iniciar sesión' : 'Registrarse'
              }
            </Button>
            <Button variant="outline" className="w-full" type="button">
              Iniciar sesión con Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {
              type === 'signIn' ? '¿Todavía no estás registrado? ' : '¿Ya estás registrado? '
            }
            {
              type === 'signIn' ? (
                <Link href="/login/sign-up" className="underline">
                  Registrarse
                </Link>
              ) : (
                <Link href="/login/sign-in" className="underline">
                  Iniciar sesión
                </Link>
              )
            }
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/next.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}