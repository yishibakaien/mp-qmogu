const ajax = require('./ajax')

// 测试接口 hello 
export const hello = data => ajax({
  url: 'hello',
  data
})

export const book = data => ajax({
  url: 'book',
  data
})

export const addGoods = data => ajax({
  url: 'addGoods',
  data
})