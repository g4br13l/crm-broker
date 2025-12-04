import { z } from 'zod'

/**
 * Schema that accepts empty string '' and transforms it to undefined
 * Use with .or() to make any schema accept empty strings as optional
 * 
 * @example
 * const schema = z.object({
 *   email: z.email().or(zEmpty),           // email or '' → undefined
 *   name: z.string().min(2).or(zEmpty),    // string with min or '' → undefined
 *   origin: z.enum(['a', 'b']).or(zEmpty), // enum or '' → undefined
 * })
 */
export const zEmpty = z.literal('').transform(() => undefined)
