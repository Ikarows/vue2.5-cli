import { get, post } from '@/config/request'

export default {
  hitokoto: p => get('/hitokoto/', p),
  postDemo: p => post('/hitokoto/', p)
}
