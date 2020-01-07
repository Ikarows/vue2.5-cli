import { get, post } from '@/config/request'

export const hitokoto = p => get('/?c=b', p)
export const postDemo = p => post('/?c=b', p)
