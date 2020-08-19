var mysql = require('mysql');
let { connection } = require('../utils/dbMysql')
// 查询商品
exports.queryGoods = async () => {
  let retn = await new Promise((resolve, reject) => {
    connection.query('SELECT * from goods', function (error, results, fields) {
      if (error) throw error;
      resolve(results)
    });
  });
  // 显示查询结果
  console.log(retn)
  return retn;
}
