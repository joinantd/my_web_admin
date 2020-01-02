const userSql = require("../lib/user.js");

class UserService {
  static async login(val) {
    let resultData = await userSql.login(val.username);
    return resultData;
  }
  static async isExitUser(username) {
    let resultData = await userSql.isExitUser(username);
    if (!!resultData[0].length) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = UserService;
