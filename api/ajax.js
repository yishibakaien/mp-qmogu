const domain = require('../config/domain')

const ajax = options => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: domain + (options.url || ''),
      data: options.data || {},
      method: options.method || 'GET',
      success: res => resolve(res),
      fail: res => {
        if (res.data.code !== 0) {
          wx.showModal({
            title: '网络出错',
            content: '数据请求失败，请检查网络: ' + res.errMsg
          })
          return
        }
        reject(res)
      },
      complete: function(res) {
        typeof options.complete === 'function' && options.complete.apply(this, res)
      }
    })
  })
}
module.exports = ajax