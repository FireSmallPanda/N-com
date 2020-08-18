const YAML = require('yamljs');
const fs = require("fs");
// 运行命令中优先读取
let settingObj = YAML.parse(fs.readFileSync(__dirname+"/settings.yml").toString());
// 如果没有配置则取运行命令中的
if(!!!settingObj){
  settingObj = YAML.parse(fs.readFileSync(__dirname+"/settings.yml").toString());
}
// 返回配置文件对象
let configObj = YAML.parse(fs.readFileSync(__dirname+"/"+settingObj.USE_CONFIG+"/com.yml").toString());
configObj.env = settingObj.USE_CONFIG
exports.configObj = configObj;


// 返回信息对象
exports.msgObj = YAML.parse(fs.readFileSync(__dirname+"/msg.yml").toString());
