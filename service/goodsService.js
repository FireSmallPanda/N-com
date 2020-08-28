let goodsManage = require("../dbm/goodsManage");


// 获取商品
exports.getGoods = async (req, res) => {
  let content = {}
  content.success = true
  content.data = await goodsManage.queryGoods(req.query);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(content));
}