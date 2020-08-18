let def = require("../service/def")
// 测试接口
exports.test = (req, res) => {
  def.test(req, res)
}

// 默认中间件
exports.loadDefault = (req, res,next) => {
  
  // 1.在这里可以进行一些校验
  // 继续执行
  next();
}