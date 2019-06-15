// const path = '@/utils/'
const d = require.context('@/utils/', true, /\.js$/)
const resources = {}
d.keys().forEach(key => {
  const filename = key
  key = /[\w\d_]+.js/.exec(key)[0]
  key = key.split('.')[0]
  resources[key] = require('@/utils/' + filename.replace(/^.\/{1}/, '')).default
})
resources.inCategory = resources.shop_in_category
resources.getCoupons = resources.shop_get_coupons
module.exports.default = resources
module.exports = resources
