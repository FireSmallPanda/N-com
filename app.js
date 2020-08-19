let express = require("express")
let app = express()
let configUtil = require(__dirname + "/config/configUtil")
let router = require(__dirname + "/controller/router")
let def = require(__dirname + "/controller/def")
let goodsController = require(__dirname + "/controller/goodsController")
// 获取配置文件
let configs = configUtil.configObj;
// 接口名字
let apiName = configs.NAME


// 调用中间件
app.use(`${apiName}/`, router.loadDefault)

//设置跨域访问
if (configs.ALLOW_ORIGIN) {
  app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  })
}
// 默认的API F0000 (必须)
app.get(`/`, router.defaultApi)

// 主页 F0001 (必须)
app.get(`${apiName}/`, router.showIndex)

// 测试接口返回 Test001 (测试接口)
app.get(`${apiName}/test`, def.test)

// 测试mysql Test02 (测试接口)
app.get(`${apiName}/testMysql`, goodsController.getGoods);






console.log(`----------默认为：http://localhost:${configs.PORT}${apiName}----------`)
console.log(`----------当前服务启动环境为：${configs.env}----------`)

// 监听未捕获的异常
process.on('uncaughtException', (err) => {
  console.log(err)
})
// // 监听Promise没有被捕获的失败函数
process.on('unhandledRejection', (err, promise) => {
  console.log(err)
})
app.listen(configs.PORT)
