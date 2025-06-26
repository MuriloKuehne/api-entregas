import z from "zod"

const envSchema = z.object({
  DATABASE_URL: z.string().url("Invalid DATABASE_URL format"),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
})

export const env = envSchema.parse(process.env)
