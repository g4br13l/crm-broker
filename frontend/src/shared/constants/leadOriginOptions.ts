import { KeyValueT } from '../types/genericTypes'



export const leadOriginOptions: readonly KeyValueT[] = [
  { key: 1, value: 'Instagram' },
  { key: 2, value: 'Facebook' },
  { key: 3, value: 'Web Site' },
  { key: 4, value: 'Indicação' },
  { key: 5, value: 'Meta Ads' },
  { key: 6, value: 'PDV' },
  { key: 7, value: 'outro' },
] as const

export const leadOriginOptionsKeys =
  leadOriginOptions.map((o) => o.key.toString()) as [string, ...string[]]

