var mysql = require('mysql');
let { connection } = require('../utils/dbMysql')
// 查询商品
exports.queryGoods = async (modSqlParams) => {
  let sql = 'SELECT * from goods where 1 = 1'
  let params = [] 
  for(key in modSqlParams){
    if(key=='name'){
      sql+=` and ${key} like ?`
      params.push("%"+modSqlParams[key]+"%")
    }else{
      sql+=` and ${key} = ?`
      params.push(modSqlParams[key])
    }
    
  }
  let retn = await new Promise((resolve, reject) => {
    connection.query(sql,params, function (error, results, fields) {
      if (error) throw error;
      resolve(results)
    });
  });
  return retn;
}
