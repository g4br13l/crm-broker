import z from 'zod'
import { KeyValueT } from '../../../shared/types/genericTypes'
import { zEmpty } from '../../../shared/utils/zodExtensions'



export function leadData() {

  const leadOriginOptions = [
    { key: 1, value: 'Instagram' },
    { key: 2, value: 'Facebook' },
    { key: 3, value: 'Web Site' },
    { key: 4, value: 'Indicação' },
    { key: 5, value: 'Meta Ads' },
    { key: 6, value: 'PDV' },
    { key: 7, value: 'outro' },
  ] as const satisfies readonly KeyValueT[]
  
  type OriginOptionT = typeof leadOriginOptions[number]
  type OriginOptKeysT = OriginOptionT['key']

  const originOptionsKeys =
    leadOriginOptions.map((o) => `${o.key}}` as `${OriginOptKeysT}`)
  

  const getOrigin = (key: OriginOptKeysT | `${OriginOptKeysT}`) => {
    key = typeof key === 'string' ? Number(key) as OriginOptKeysT : key
    return leadOriginOptions.find((o) => o.key === key) as OriginOptionT
  }
  
  
  const leadFormSchema = z.object({
    id: z.number().nonnegative(),
    name: z.string().min(3).max(100),
    phone: z.string().min(12).max(14),
    email: z.email().optional().or(zEmpty),
    origin: z.enum(originOptionsKeys).optional().or(zEmpty),
    interestedIn: z.string().min(2).max(50).optional().or(zEmpty),
    notes: z.string().min(2).max(1_000).optional().or(zEmpty),
  })
  
  return {
    leadOriginOptions,
    originOptionsKeys,
    leadFormSchema,
    getOrigin,
  }
  
}

type LeadDataReturnT = ReturnType<typeof leadData>
export type LeadT = z.infer<LeadDataReturnT['leadFormSchema']>
export type LeadFormInputT = z.input<LeadDataReturnT['leadFormSchema']>
export type OriginOptionsT = LeadDataReturnT['leadOriginOptions']
export type OriginOptionsKeysT = OriginOptionsT[number]['key']
export type OriginOptionsValsT = OriginOptionsT[number]['value']

export type TestLeadT = {name:'gab'}


