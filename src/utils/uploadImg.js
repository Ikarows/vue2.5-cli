/**
 * 图片压缩上传
 * @export
 * @param {Blob} file 图片文件格式
 * @param {Object} compressorConfig 图片压缩配置（默认quality： 0.8） https://github.com/fengyuanchen/compressorjs
 * @param {String} uploadCatalog 上传图片目录（默认目录：/api.php/index/upload）
 * @returns {Promise}
*/

import axios from 'axios'
import Compressor from 'compressorjs'
import { Notify } from 'vant'
function upLoadImg (file, compressorConfig = {}, uploadCatalog = '/index/upload') {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.8,
      convertSize: 500000, // 大于500k则转成jpg
      ...compressorConfig,
      success (result) {
        const params = new FormData()
        params.append('image', result, result.name)
        const config = {
          headers: {
            // 添加请求头
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.post(uploadCatalog, params, config)
          .then(res => {
            if (res.data.code === 0) {
              resolve(res.data.data)
            } else {
              Notify(res && res.data.message ? res.data.message : '上传失败')
              resolve(res.data.data)
            }
          })
          .catch(err => {
            Notify('上传失败')
            reject(err)
          })
      }
    })
  })
}

export default upLoadImg
