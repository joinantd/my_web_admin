const userSql = require("../lib/user.js");

class UserService {
  static async login(val) {
    let resultData = await userSql.login(val);
    return resultData;
  }
}

module.exports = UserService;
