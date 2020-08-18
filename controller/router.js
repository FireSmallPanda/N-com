// 默认进入 F0000
exports.defaultApi = (req, res) => {
  res.writeHead(200, { 'Content-Type': "text/html;charset=UTF-8" });
  res.end('Hello world');
}

// 默认接口 F0001
exports.showIndex = (req, res) => {
  res.writeHead(200, { 'Content-Type': "text/html;charset=UTF-8" });
  res.end('欢迎来到模拟后台');
}

// 默认中间件
exports.loadDefault = (req, res,next) => {
  
  // 1.在这里可以进行一些校验
  // 继续执行
  next();
}