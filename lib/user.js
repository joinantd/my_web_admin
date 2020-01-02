let query = require("./common.js");

/**
 * 用户管理
 */

//登录
let login = value => {
  let _sql = `select * from cs_user where username = ?`;
  return query(_sql, value);
};

//
let isExitUser = value => {
  let _sql = `select * from cs_user where username = ?`;
  return query(_sql, value);
};

module.exports = {
  login,
  isExitUser
};
