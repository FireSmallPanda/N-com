let returnUtil = require('../utils/returnUtil')

// 测试服务
exports.test = async (req, res) => {
  let content = {}
  console.log("开始异步")
  let retn1 = await new Promise((resolve, reject) => {
    console.log('进入异步')
    setTimeout(function () {
      resolve('time')
    }, 1000)
  });
  console.log("结束异步")
  content.success = true
  content.data ={
    name:"阿豪",
    qq:"1020529941"
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(content))
}