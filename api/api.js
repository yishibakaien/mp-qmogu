const ajax = require('./ajax')

// 测试接口 hello 
export const hello = () => ajax({url: 'hello'})