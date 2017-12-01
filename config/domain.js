
// 接口地址
const env = require('./env')
const domian = {
  dev: 'https://lawro80g.qcloud.la/weapp/',
  prod: 'https://132733326.qmogu.com/'
}
module.exports = domian[env]