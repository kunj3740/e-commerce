import  z from 'zod'
export const signupInput = z.object({
    username: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
})