let goodsService = require("../service/goodsService")
// 默认接口 F0001
exports.getGoods = (req, res) => {
  goodsService.getGoods(req, res)
}

// 默认中间件
exports.loadDefault = (req, res,next) => {
  
  // 1.在这里可以进行一些校验
  // 继续执行
  next();
}