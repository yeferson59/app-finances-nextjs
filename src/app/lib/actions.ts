"use server"

import { turso } from '@/lib/turso'
import { z } from 'zod'
import bcrypt from "bcrypt"

const createUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  createdOn: z.date() 
})

const getUserSchema = z.object({
  email: z.string(),
  password: z.string()
})

const UserSchema = z.object({
  id: z.string(),
  firs_name: z.string(),
  las_name: z.string(),
  user_email: z.string(),
  password: z.string(),
  created_on: z.string()
})

const createUserFormSchema = createUserSchema.omit({
  id: true,
  createdOn: true
})
export async function createUser(formData: FormData){

  const { name, lastName, email, password } = createUserFormSchema.parse({
    name: formData.get('name'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password')
  })

  const  passwordHashed = bcrypt.hashSync(password, 20)
  const [date] = new Date().toISOString().split('T')
  const id = crypto.randomUUID()

  await turso.batch([
    {
      sql: "INSERT INTO user (id, firs_name, las_name, user_email, password, created_on) VALUES (?, ?, ?, ?, ?, ?)",
      args: [id, name, lastName, email, passwordHashed, date]
    }
  ], "write");
}

export async function getUser(formData: FormData){
  const {email, password } = getUserSchema.parse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  const {rows} = await turso.execute({
    sql: "SELECT * FROM user WHERE user_email = ?",
    args: [email]
  })



  const passwordHashed = UserSchema.parse(rows[0])

  const isUser = bcrypt.compareSync(password, passwordHashed.password);
  return isUser
}