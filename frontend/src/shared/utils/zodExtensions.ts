import z from 'zod'



// Helper to transform empty strings to undefined (for optional fields)
export const zEmpty = z.any().optional().or(z.literal('')).transform(() => undefined)
